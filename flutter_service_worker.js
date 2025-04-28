'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "b7604f1368507e93a5ed1787ceaa5693",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c5f31e32f9621ee6082195cc9136626",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3076ff0a804e657c57abc1686ce6b8eb",
".git/logs/refs/heads/main": "c7e73126bb3bf6f3ae6e0620440ca526",
".git/logs/refs/remotes/origin/main": "3ba52ca96b0ca02aa157d5e854e4cd5f",
".git/objects/01/3d71f39ecab835e31842e533c65ab1495f06c0": "a5f63eeeaaa22cedb76dafee2b06eabf",
".git/objects/04/c4c0f5d5983db1a5687a83e381180abc4dc8ef": "4e8e1476e04ed3a6df8d3c7ac30a814d",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/35/889b0fcd0f30f0eb316c507ac92186bbcc26be": "e27ba234a89158a1dd719ce96d4d64e1",
".git/objects/35/e913350b63dac752419251430c817b5c0ed2a2": "9302738e4b896b511c5fb1a0f7be58e9",
".git/objects/44/e6e2fb6d72f4f447a4bd6f92c41616a429c447": "479094105d84fe6bc3495581b396bb39",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/50/8b848bd1e0c354a433c0c095830f85f505142f": "39b22093b760cc7983d3ea227c68873a",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5b/d717a2dfd98c55ed4cb6a954b0b5bf23628c64": "376c1baa6fda6e25ef48672a661f506a",
".git/objects/63/0fd0bf02c28c48d4a10241058cd7ece09a8644": "326744ae0fd02796e2c70b02989c7985",
".git/objects/66/adb5df1bc2fc88d32401caf8303a8ed4c41e57": "6d3e795248e09ae94b899e09593bd1ff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/e059eac0270f582e285ae6755162532faca781": "fe89b484dfa56f1cd7ae61d85c72cf9e",
".git/objects/72/8e1481569017b8e8fc30346edbe0ea490f0fee": "ea12bff3169f259025c2a7aeffd8577b",
".git/objects/7e/5d5dd6b2e0c42bd7634d59ccb5b8828b3e953e": "2c099bd3625528c475d2dca282d0ff0d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/deeadf2ac0cb577a53300cf2163c3e2cbdcc22": "17abed0ee75d49b53fb159194b68c462",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/15f09bf1f32695e91182e865526df6b75f6eb9": "9e067640c3540aa0c05d896fd5de6ee8",
".git/objects/97/2d7d382275efdb8ef0fef43f182143085cf10c": "c8e31cdc7fb93941eaae5c8fdf467b73",
".git/objects/97/e02553ec08b4b7f55b0d265a15875004ee4c63": "10e98b1c4dd413561c9fc3e36a360dc8",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/64a15cdee67f0f98b17a2fe45acd5004a04cc3": "5986db434e7bb573d19ced2b429e3af3",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/26f96548d40f5f01240a2515029450e809cdc8": "dd2680e951c208daf9bbcade0887617a",
".git/objects/a7/13edb99814a910380634806459bfdd26411b6a": "9aebee36b55bc3155f131e43a20d88b7",
".git/objects/b0/02e6d3cc7be81916872f6ad5c4a48d486828e8": "de92743c4371864e43749517691c58d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c2/5e79a38898db36c6e868d2ae8b6447657a2849": "e4b032fbcf1f9c43040686eea5c7e50f",
".git/objects/cd/c8d5e05c6d5c1b711c780a1ec6d2de7dd6b72c": "36e4147912c9cae4f64cd1b2b932db3a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/100ec22036a00bbe1e10efd3fa08ba78278cfa": "bed11b3b78badff1f37dc7d0b0c42561",
".git/objects/e4/2d1beb567fd6f586f919912d3ef970115ed501": "1cc82f6b912f21c1d479503c74b54958",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/bb3f60f717eef21044bec8c5999fb4101f8917": "fae25592e578ace7233bee9bc879d91b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/bafca00e44111644977e991d8dc198ba8b4a54": "c20fe02fe855230dbd3973d287e0ae9b",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/refs/heads/main": "6f14a4cba78fb23291eaade44cdb5569",
".git/refs/remotes/origin/main": "6f14a4cba78fb23291eaade44cdb5569",
"assets/AssetManifest.bin": "6d05366bb0aed4f089652bf846c608af",
"assets/AssetManifest.bin.json": "074733cdfd1949cc84e8c6cc877d9ff3",
"assets/AssetManifest.json": "90c980b60f6316b5bbd66613ce208fdd",
"assets/assets/CV-Asikul_Islam_Sawan.pdf": "6bf4cf436b6377ec86c7b937143b80ca",
"assets/assets/icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/linkedin.png": "cc96dc5f2a065172ea0fcc54a8863fd7",
"assets/assets/icons/stack-overflow.png": "4afe5c347532fa2cc942f45c265a43f8",
"assets/assets/images/ashikulislam.png": "42ba17a26a232be94897274854b7610e",
"assets/assets/images/ashikulislamdev.jpg": "eab5d5b23aba539b63a46c46eabbcc40",
"assets/assets/images/flutter-bg.gif": "dedf246e6b6ba8ce988c11f82c508a9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "13540d8dc2726ec24b737745e542371e",
"assets/NOTICES": "a27f6938a821de43902acceb886dbff9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "97b222b8f056bf9b2dfa8573362b5663",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c536248704a74acca1af840995a94c19",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76190e71bf451dd2b061c47984750583",
"/": "76190e71bf451dd2b061c47984750583",
"main.dart.js": "58838fc6457d04c57a36cf4a48b186d2",
"manifest.json": "5881ebf7746d9bbc97f50298b821517d",
"version.json": "df1d05570867c6b0c7f9fb231c9c2ada"};
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
