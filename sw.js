// 서비스 워커 기본 뼈대
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 오프라인 지원 로직 (필요시 추가)
});
