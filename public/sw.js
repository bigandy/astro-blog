const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const pagesCacheName = "pages";
const maxPages = 50; // Maximum number of pages to cache

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

var cacheName = `bigandy:${currentDate}`;
var cacheFiles = [
  "/",
  "/about/",
  "/now/",
  "/blog/",
  "/experiments/",
  "/offline/",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(cacheFiles);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(function () {
        return caches.match("/offline/");
      })
  );
});
self.addEventListener("activate", function (event) {
  var cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
