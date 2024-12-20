'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "50f96b091bc922912cb0afa7a19a2304",
".git/config": "2b7d97a6e97dda3eb31bc98cae1da08b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9bd474087b12123f25c8a733b9abd086",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "33cdce2a700bc2cd36bb8b59c7251ff7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b64fed80a28ccb7892be4a4bb50e8f38",
".git/logs/refs/heads/master": "b64fed80a28ccb7892be4a4bb50e8f38",
".git/logs/refs/remotes/origin/master": "aa3e91e693654144d6b4a2d63848e640",
".git/objects/01/87f666b5c8b8388c766834fd37151a06b1ddfe": "929c3e6809c0f71202a355c9d12a9c83",
".git/objects/05/adb347614ac448998070548eb7d88ce8470a35": "448c53c1e0dc7ca44e91eac7f602e7c5",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/50dbef4f108bc83341e52371859862d816c586": "9cfee9ebcb637ac883852fc37cd06eb2",
".git/objects/13/35367e91a0d7554b913cd5de55de01d6f50f03": "226890b9cb7ff497ce6838beec8574e6",
".git/objects/1d/fe71bc0abcb8765eefca4ea424384df6e21689": "908cf7f681ec5ecc67ea50794d8c7b4a",
".git/objects/1e/d9196028a370460099d6734d7d7b10e26b1647": "6009104953125c412d43474d8e2f7ee6",
".git/objects/20/f36f4d4521494f8de713879e9ad1c948dad5e0": "1fc8c3ab3b5c972c82bd359f248cc28b",
".git/objects/32/6a71691f5b0b1eae47d006778c892087751e67": "4bcf417f62a1132feba2268dfb7439ea",
".git/objects/34/1b33f26e1f3a518c0051f57e5dda83c2510b6d": "218dea91b0635e67b8f03ee929dd429e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/1e8c5ce8fc3b89f7526db9bc44305acdc9d4da": "038d9ce7d7c7636df1d90fbc6fe8420d",
".git/objects/45/653c46e299937f9dc48dd9e0a21d34ae9d66f0": "807b708a911c0136f7025c496c5bc38c",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/4d/248023726f3f7aec44f7c353848d5b8592423b": "0ecabd4efb8b2fcb3c269b4513df2ce3",
".git/objects/53/ab6f058e70e9d96522bac8a88a15c6f89ab22b": "1402e11321e5965fb13b30a4ec754b60",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/62/88069d24679e3f1624114da0c213211c0ad602": "3620edc3a52ae099ae101583d4d8379b",
".git/objects/73/b5049792dfc3ce10765c695f5b83d9bdd8ce26": "b4f06123a7c7ba5204f52aafcad7906b",
".git/objects/7d/5b03c3b9f35efa5a767a4c61efc57766a55cf3": "99c65ff613b04c1de773a2babca0cf40",
".git/objects/83/5e526b4855e94b6bdc353e6edfffd90c6fc6bb": "9be11111e6d5354fe0d68714a7c5d7d9",
".git/objects/85/8772b80bcc076e8f302d5309eef1dab4a7998d": "e0a015b56ed1c9ad29e1affecc622c05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/3a0c83378d9732f3613fc4d1539dc5423e8826": "e75cf5f8ceed04004a0dcdf035fe1028",
".git/objects/9f/33c4871736aed54a4be73ef853163b7b4a9d01": "5ca44d29cc777ca4c224707b6032b12f",
".git/objects/a0/5bb63aa690fbd30a57c8a7934630945e42bd40": "8980fe6a2af769f823b79966caec0f01",
".git/objects/a1/8c6c696b18fcf3377482c387069cafa31e6430": "5214d54adeda624d11a945bf80994675",
".git/objects/a7/d75684b110fd6e0c6de3b32cdb688650dd928f": "6817876a051a6cb45a941e6586b3dad6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/a2f66e3e7b989584d93d650ff6803096a58877": "78c5ea3410f87d8243c956c4864329b0",
".git/objects/b0/5c6298d2686755c9a02c3e26371b058bacef8d": "b36f5fd3b1ef7f13c7ba74670e64dd6b",
".git/objects/b5/75f040e8ed98001841a90b50fd01c6904d811e": "20ebfabfef20e7d565edf56b78ec2059",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/612010349fd0ff3c582ecf828198eab277e967": "12222857eb41175ef01e8b8ee677af7f",
".git/objects/d3/0103db624fc956c0ed26af5b065b9a0cdefaa5": "531e90578a32a9b6080cd735385b5a7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/fd1ba149e177a86e73ae24823c6e9d2f774c24": "11637de9a4a20a76efb6e000af2f7552",
".git/objects/e2/49245dbb76d0a69411623aec0698e275b1efd7": "4e2a7b0fac688483a7818ff10cad6241",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/58a819c8b4b7b45dc4ceebb273194e8b713fb4": "7090679316e9db2c78af58e32e245380",
".git/objects/ee/14a6d0b16906ca8313161f343e68b77dc615ac": "fbcf302aedcac70f23012358431c3304",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "5f83adff43298c7a75d2ae9cb8f3d7a6",
".git/refs/heads/master": "5f83adff43298c7a75d2ae9cb8f3d7a6",
".git/refs/remotes/origin/master": "5f83adff43298c7a75d2ae9cb8f3d7a6",
"assets/AssetManifest.bin": "256df8a8bd906f1e3090531fb53e829c",
"assets/AssetManifest.bin.json": "db71a791ac3f3ba78d6d8b83f159af49",
"assets/AssetManifest.json": "0bc9544249c8a885a94819b651058ba5",
"assets/assets/python.png": "0785b26f1f578724752c1e194c4d093f",
"assets/assets/SQLite.png": "4a3f63bbf756fdf8cc71b939dbf1056c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3fbe09a0489ffd5e3809d7d4c999d3b2",
"assets/NOTICES": "6151fb0978f9f85ab8598962b93a4d44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "d9252a0c6a6498261f19267314e95a47",
"canvaskit/canvaskit.js.symbols": "7e9893036c3fa7843429f59531f3b942",
"canvaskit/canvaskit.wasm": "5ddabdaf5ff10d64d4f06fbd522f4ff1",
"canvaskit/chromium/canvaskit.js": "417c635e514296a337033bbd95ba8332",
"canvaskit/chromium/canvaskit.js.symbols": "a1fea26b10a418991dc0fdd670d0a105",
"canvaskit/chromium/canvaskit.wasm": "4bed638ac5457a6ee18834aeaab3deb0",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "bd0e768fef31e76b4c56f7caa4efdd90",
"canvaskit/skwasm.wasm": "f65759a23ad54e185d6a3f17817b16ca",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "327a3060925e525407f4f2747a4712d6",
"canvaskit/skwasm_st.wasm": "809674c831d83f7f9c71d9dd93771403",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "493ee8df6c0e14181bb41f6857f11e66",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "95afc37bd24e3215d08a3347780ce1d3",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
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
