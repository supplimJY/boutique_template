// Button Hover Effect

const btn0bj = {
  // DOM 컨트롤 클래스 요소 객체 정의
  commonBtn: '.common-btn', //버튼요소
  wArrow: '.White', //흰색 화살표
  bArrow: '.Black', //검은색 화살표
};

//호버 시 화살표 색 전환
function btnHoverEffect(obj) {
  const hoverBtn = document.querySelectorAll(obj.commonBtn);
  hoverBtn.forEach((btn) => {
    const wArrow = document.querySelector(obj.wArrow);
    const bArrow = document.querySelector(obj.bArrow);

    btn.addEventListener('mouseenter', function () {
      wArrow.style.display = 'block';
      bArrow.style.display = 'none';
    });

    btn.addEventListener('mouseleave', function () {
      wArrow.style.display = 'none';
      bArrow.style.display = 'block';
    });
  });
}

btnHoverEffect(btn0bj); //함수 호출

// Swiper Plugin Code //

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
