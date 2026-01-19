const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const pagesCacheName = "pages";
const maxPages = 50; // Maximum number of pages to cache

// This arrangement can be altered based on how we want the date's format to appear.
const currentDate = `${day}-${month}-${year}`;

var cacheName = `bigandy:${currentDate}`;
var cacheFiles = [
	"/",
	"/about/",
	"/now/",
	"/blog/",
	"/experiments/",
	"/offline/",
];
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => cache.addAll(cacheFiles)),
	);
});
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
			.catch(() => caches.match("/offline/")),
	);
});
self.addEventListener("activate", (event) => {
	var cacheWhitelist = [cacheName];
	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				}),
			),
		),
	);
});
