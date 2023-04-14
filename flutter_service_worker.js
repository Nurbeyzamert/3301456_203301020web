'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5a93593ed56e14c8ed3cdf4083199bb7",
"assets/assets/fonts/Caveat-Regular.ttf": "04c3547e70bd8d53833d325c37f9621f",
"assets/assets/fonts/Cinzel-Regular.ttf": "36e3287473aad3878156ae4983ffb79a",
"assets/assets/fonts/MajorMonoDisplay-Regular.ttf": "e7acc228230d22332855765872b0a3bf",
"assets/assets/fonts/MontserratSubrayada-Regular.ttf": "7f9c56b7151403db5640a7fa393f6c09",
"assets/assets/images/bluz.png": "cec61036cbc1daf6c119512ca5d72277",
"assets/assets/images/bluz1.png": "4152462d4195776827d11a5d6ac66d66",
"assets/assets/images/bluz2.png": "6a5fe07fc41852cbdd90ba547b8cccfb",
"assets/assets/images/bluz3.png": "90ef952bba4176ba72ff6954711b907c",
"assets/assets/images/bluz4.png": "59c9a6f08387a0f8df7b1e9c945fe5c3",
"assets/assets/images/bluz5.png": "4528e92492a74a0f6b0c5b8a64b4727d",
"assets/assets/images/elbise.png": "2392ef653cec3e35cb1a426cfe45492a",
"assets/assets/images/elbise1.png": "bd54f89275c4b03d65f3f9a89e128c59",
"assets/assets/images/elbise2.png": "b2c57b7916d750e8d1c602dc80b9a720",
"assets/assets/images/elbise3.png": "d5e1141b8609a20ba365ded5fc06176f",
"assets/assets/images/elbise4.png": "3752ffa841a04546a592918f0c128399",
"assets/assets/images/elbise5.png": "897cf4aaee3d22c04fd024176bb14111",
"assets/assets/images/jean1.png": "d34e8b8615bba6a160a2e91d7c7a7794",
"assets/assets/images/jean2.png": "63f23424c01529b19c3c314dda7478c9",
"assets/assets/images/jean3.png": "2b6d33bd6ffc09551f3fa3eef219c5a1",
"assets/assets/images/kalp-yaka.jpg": "f99e8a0008efc0efb648050c7dd0314b",
"assets/assets/images/Mooi.png": "6fb61b359766645b76fa921c717f9fbc",
"assets/assets/images/Mooi1.png": "c9697f3917dbfcc4f712308627ab42c0",
"assets/assets/images/pantolon.png": "b3a213a84db20186d71f3e45c193512a",
"assets/assets/images/pantolon1.png": "3917b4fb05a92ccb2c819fe096e52205",
"assets/assets/images/pantolon2.png": "9c6f7fb68c15e9e3121541b60159d326",
"assets/assets/images/pantolon3.png": "4276c9a842caf2934596c6fdb9f7771f",
"assets/assets/images/takim.png": "13a14478a9317cb55a1b1d2b20c3838b",
"assets/assets/images/takim1.png": "72539a20cc49bb638c8a76669809d45f",
"assets/assets/images/takim2.png": "5c5f79f8d11d71b6103a9e3ce6fb1338",
"assets/assets/images/takim3.png": "eeb4985498c2ad73feb2e7d09ad770de",
"assets/assets/images/takim4.png": "31f7dc776b2114ef4098603240547cb1",
"assets/assets/images/takim5.png": "3d3640935a15aa7950d2de4e2aaf06d4",
"assets/FontManifest.json": "85d2a4ef53d20ab6000b48d96c3e5c73",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5abc4665eb85617395b700f449ac45bb",
"/": "5abc4665eb85617395b700f449ac45bb",
"main.dart.js": "72fc646dd8107c29ab8b15e9357c6364",
"manifest.json": "9cf14c09fe5f0673ac9346119c1412fc",
"version.json": "912a4060df9619470a24fd7f5270e8d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
