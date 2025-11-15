import { Dexie } from 'dexie'
import { caseSeed } from './caseSeed'

export const db = new Dexie('ky-search-seizure')

db.version(1).stores({
  cases: 'id,nameLower,citationLower,year,courtLevel,*categories,*searchTokens',
})

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenizeCase(caseItem) {
  const baseTokens = [caseItem.name, caseItem.citation, caseItem.summary]
    .filter(Boolean)
    .map(normalizeText)
    .join(' ')
    .split(' ')
    .filter(Boolean)

  const factTokens = (caseItem.facts || [])
    .map(normalizeText)
    .join(' ')
    .split(' ')
    .filter(Boolean)

  const combined = new Set([...baseTokens, ...factTokens])
  return Array.from(combined)
    .filter(token => token.length > 1)
    .sort()
}

export async function initializeDatabase() {
  await db.open()
  const count = await db.table('cases').count()

  if (count > 0) {
    return false
  }

  const enrichedCases = caseSeed.map(item => ({
    ...item,
    nameLower: item.name.toLowerCase(),
    citationLower: item.citation.toLowerCase(),
    searchTokens: tokenizeCase(item),
    insertedAt: new Date().toISOString(),
  }))

  await db.table('cases').bulkPut(enrichedCases)
  return true
}

export async function fetchAllCases() {
  await db.open()
  return db.table('cases').toArray()
}

