import { parseStoreSchema } from './dexieSchema.js'

export class Dexie {
  constructor(name) {
    this.name = name
    this.versionNumber = 1
    this.storeSchemas = new Map()
    this.db = null
  }

  version(number) {
    this.versionNumber = number
    return {
      stores: schemaMap => {
        Object.entries(schemaMap).forEach(([storeName, schemaString]) => {
          this.storeSchemas.set(storeName, parseStoreSchema(schemaString))
        })
      },
    }
  }

  async open() {
    if (this.db) {
      return this.db
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.name, this.versionNumber)

      request.onupgradeneeded = event => {
        const dbInstance = event.target.result
        this.storeSchemas.forEach((schema, storeName) => {
          if (dbInstance.objectStoreNames.contains(storeName)) {
            dbInstance.deleteObjectStore(storeName)
          }
          const { keyPath, autoIncrement, indexes } = schema
          const store = dbInstance.createObjectStore(storeName, {
            keyPath: keyPath || undefined,
            autoIncrement: autoIncrement || false,
          })
          indexes.forEach(index => {
            try {
              store.createIndex(index.name, index.keyPath, {
                unique: false,
                multiEntry: index.multiEntry,
              })
            } catch (error) {
              console.warn(`Dexie-lite: failed to create index ${index.name}`, error)
            }
          })
        })
      }

      request.onsuccess = event => {
        this.db = event.target.result
        resolve(this.db)
      }

      request.onerror = () => {
        reject(request.error || new Error('Dexie-lite: failed to open database'))
      }
    })
  }

  table(name) {
    return new Table(this, name)
  }
}

class Table {
  constructor(dexie, name) {
    this.dexie = dexie
    this.name = name
  }

  async _transaction(mode = 'readonly') {
    const db = await this.dexie.open()
    const tx = db.transaction(this.name, mode)
    return { tx, store: tx.objectStore(this.name) }
  }

  async bulkPut(items) {
    const { tx, store } = await this._transaction('readwrite')
    items.forEach(item => store.put(item))
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(items.length)
      tx.onerror = () => reject(tx.error)
    })
  }

  async bulkAdd(items) {
    const { tx, store } = await this._transaction('readwrite')
    items.forEach(item => store.add(item))
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(items.length)
      tx.onerror = () => reject(tx.error)
    })
  }

  async put(item) {
    const { tx, store } = await this._transaction('readwrite')
    store.put(item)
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(item)
      tx.onerror = () => reject(tx.error)
    })
  }

  async get(key) {
    const { store } = await this._transaction('readonly')
    return new Promise((resolve, reject) => {
      const request = store.get(key)
      request.onsuccess = () => resolve(request.result ?? null)
      request.onerror = () => reject(request.error)
    })
  }

  async count() {
    const { store } = await this._transaction('readonly')
    return new Promise((resolve, reject) => {
      const request = store.count()
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  async toArray() {
    const { store } = await this._transaction('readonly')
    return new Promise((resolve, reject) => {
      const request = store.getAll()
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  async clear() {
    const { tx, store } = await this._transaction('readwrite')
    store.clear()
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true)
      tx.onerror = () => reject(tx.error)
    })
  }
}
