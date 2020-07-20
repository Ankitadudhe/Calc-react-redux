var appVersion='v1.00';

// files to cache
var files=[
    './index.html',
    './index.css',
    './App.js'
]
//install
self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(appVersion)
        .then(cache=>{
            return cache.addAll(files)
            .catch(err=>{
                console.error('Error adding files to cache',err);

            })
        })
    )
    console.info('sw install')
})