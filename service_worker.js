const sCacheName = 'panoramaWeb-pwa'; // 캐시제목 선언
const aFilesToCache = [
  // 캐시할 파일 선언
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './images/favicon.png',
  './images/16x16.png',
  './images/32x32.png',
  './images/192x192.png',
  './images/512x512.png',
  './images/aboutMe.jpg',
  './images/bg.jpg',
  './images/food.jpg',
  './images/me.jpg',
  './images/member1.jpg',
  './images/member2.jpg',
  './images/member3.jpg',
  './images/promotion.jpg',
  './js/ie.js',
  './js/main.js',
  './images/sea.mp4',
];

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', pEvent => {
  console.log('서비스워커 설치함!');
  pEvent.waitUntil(
    caches.open(sCacheName).then(pCache => {
      console.log('파일을 캐시에 저장함!');
      return pCache.addAll(aFilesToCache);
    })
  );
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', pEvent => {
  console.log('서비스워커 동작 시작됨!');
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환
self.addEventListener('fetch', pEvent => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then(response => {
        if (!response) {
          console.log('네트워크에서 데이터 요청!', pEvent.request);
          return fetch(pEvent.request);
        }
        console.log('캐시에서 데이터 요청!', pEvent.request);
        return response;
      })
      .catch(err => console.log(err))
  );
});
