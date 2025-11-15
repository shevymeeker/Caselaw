const APP_SHELL_CACHE = 'ky-search-seizure-shell-v1'
const DATA_CACHE = 'ky-search-seizure-data-v1'
const APP_SHELL_FILES = ['/', './', '/index.html']

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then(cache => cache.addAll(APP_SHELL_FILES)).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== APP_SHELL_CACHE && key !== DATA_CACHE)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }

  const url = new URL(request.url)

  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(cacheResponse => {
        const fetchPromise = fetch(request)
          .then(response => {
            const cloned = response.clone()
            caches.open(APP_SHELL_CACHE).then(cache => cache.put('/index.html', cloned))
            return response
          })
          .catch(() => cacheResponse)

        return cacheResponse || fetchPromise
      })
    )
    return
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
})

function cacheFirst(request) {
  return caches.match(request).then(cacheResponse => {
    if (cacheResponse) {
      return cacheResponse
    }

    return fetch(request)
      .then(response => {
        const cloned = response.clone()
        caches.open(APP_SHELL_CACHE).then(cache => cache.put(request, cloned))
        return response
      })
      .catch(() => caches.match('/index.html'))
  })
}

function networkFirst(request) {
  return fetch(request)
    .then(response => {
      const cloned = response.clone()
      caches.open(DATA_CACHE).then(cache => cache.put(request, cloned))
      return response
    })
    .catch(() => caches.match(request))
}
