// 아이디가 circle 인 요소를 찾아서 저장
const circle = document.getElementById('circle');
// 태그명이 article 인 요소를 모두 찾아서 저장
const article = circle.querySelectorAll('article');

// article 전체 개수 만큼 반복하면서 mouseenter, mouseleave 이벤트 연결
for (let el of article) {
  //
  el.addEventListener('mouseenter', () => {
    circle.style.animationPlayState = 'paused';
  });
  //
  el.addEventListener('mouseleave', () => {
    circle.style.animationPlayState = 'running';
  });
}
