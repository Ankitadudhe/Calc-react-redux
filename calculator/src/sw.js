 var cacheData='v1.00';

 // files to cache
var files=[
   './index.html',
      './index.css',
  './App.js'
]
//install
self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open("cacheData")
        .then(caches=>{
            return caches.addAll(files)
            .catch(err=>{
                console.error('Error adding files to cache',err);

            })
        })
    )
    console.info('sw install')
})