'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "cb2b6745a3c0062d422088a48fe15fed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "9a92f633eb1b74b14279a4abac2e87e2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_bootstrap.js": "fa2a8a5c0462aab72b6a2708f968bbfc",
"index.html": "7a72940487f9cf3d14fce1f63a8daea9",
"/": "7a72940487f9cf3d14fce1f63a8daea9",
"assets/FontManifest.json": "b8f1e719e8a63e685ea9e33e71ef7b5c",
"assets/AssetManifest.bin.json": "c5f222074a4d39716924c0114d7911e8",
"assets/NOTICES": "6bf6f204b7043c78c92a25fddd6f9907",
"assets/AssetManifest.bin": "50b767cd7b43d42dd66725dac43a0265",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/autocomplete.gif": "3c7cb13c16c5296de01def820a7504ef",
"assets/assets/images/App-removebg-assets.png": "d2b3fd78c7c8aaa00abb59a1ffd5584d",
"assets/assets/images/notelogo.png": "2226c33110b1049b2023b015070bbee8",
"assets/assets/images/notephone.png": "cec68714e1125864e3c806c687b8bcf4",
"assets/assets/images/phone.gif": "42f275ce80e4c1e81b5f5ba43a4a4bf1",
"assets/assets/images/google.gif": "2a7fc99c963d468415aeab8004e707ef",
"assets/assets/images/AI.gif": "66c39aa08bb02e21411f77bd0bf6aa54",
"assets/assets/images/checkbox.png": "ad71b4d0e308b2c0fb0e6ddf2ce25999",
"assets/assets/images/github.png": "9cd5f9efbff102e3b691e7ad5adf8155",
"assets/assets/images/document.gif": "bb5c1b55a5cc446be9e7530345a5747d",
"assets/assets/images/coding.gif": "ddb38a4f871212ec6ee5bdc113b24671",
"assets/assets/images/NT.png": "cd2a9b7eed34de7aa01b8fad9ae1bf31",
"assets/assets/images/background.png": "c1b14001f1d741d1c3073a38350a1464",
"assets/assets/images/line.png": "817073a45a5fac4c703aee04bd40ec50",
"assets/assets/images/files.png": "8e676523609d7fa162c13fc90162fb4a",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-ExtraBold.ttf": "71511b61c7cc7382534679764c55fa26",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-SemiBold.ttf": "6477462b194fe912c49d7028134f4704",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Regular.ttf": "db4ccc34d6b61c745e422d6861243b07",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Black.ttf": "ae8adcaf9e52db5fe11e831e339eae88",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Light.ttf": "6a1e29c75a88258e5857c37a6ca08240",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Thin.ttf": "3f77c4d54d8f34614ffafbcf127869d0",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-ExtraLight.ttf": "396022a1ab703d31777d8248c7fef33c",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Bold.ttf": "3183943cee660f1a083cd23fd18d2355",
"assets/assets/fonts/Afacad_Flux/static/AfacadFlux-Medium.ttf": "1908d8590475462cae7f269a30bee57a",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Afacad_Flux,Roboto/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/AssetManifest.json": "511ff028344e9acd77ec5d21f8556961",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js": "b55a12326868973abb5e7df726748d91"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
