const cacheName = 'sw-cache_001';

this.addEventListener('install', (event) => {
    console.log('[Service Worker] Installation');

    event.waitUntil((async () => {
        let cache = await caches.open(cacheName);
        await cache.addAll([
            './',
            'main.css',
            'favicon.ico',
            'manifest.json',
            'static/js/bundle.js',
            'static/js/0.chunk.js',
            'static/js/main.chunk.js'
        ]);
    })());
});

this.addEventListener('fetch', (event) => {
    if (navigator.onLine) {
        return;
    }

    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(respondWith(event));
    }
});

const respondWith = async (event) => {
    let cache = await caches.open(cacheName);

    return await cache.match(event.request);
};


// self.addEventListener('push', event => {
//     console.log(event);
//     const dataJSON = event.data.json();
//     console.log('json', dataJSON);

//     const notificationOptions = {
//         body: dataJSON.body,
//     };

//     return self.registration.showNotification(dataJSON.title, notificationOptions);
// });
