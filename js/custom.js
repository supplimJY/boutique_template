// Button Hover Effect

const btnObj = {
  // DOM 컨트롤 클래스 요소 객체 정의
  commonBtn: '.common-btn', //버튼요소
  wArrow: '.White', //흰색 화살표
  bArrow: '.Black', //검은색 화살표
};

const swiperObj = {
  commonBtn: '.swiper-button div', //버튼요소
  wArrow: '.arrow-white', //흰색 화살표
  bArrow: '.arrow-black', //검은색 화살표
};
//호버 시 화살표 색 전환
function btnHoverEffect(obj) {
  const hoverBtn = document.querySelectorAll(obj.commonBtn);
  hoverBtn.forEach((btn) => {
    const wArrow = btn.querySelector(obj.wArrow);
    const bArrow = btn.querySelector(obj.bArrow);

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

btnHoverEffect(swiperObj); //함수 호출
btnHoverEffect(btnObj); //함수 호출

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

// Mobile Header  Toggle Active //
// 1. 아이콘 클릭 -> 2. 아이콘에 'on'클래스 추가(toggle) -> 3. 네비게이션 높이 저장 -> 4. 'on' 클래스가 있을 때 네비게이션 활성화 -> 5. 'on'  클래스가 없을 때 네비게이션 비활성화

const menuIcon = document.querySelector('.menu-icon');
// 메뉴 아이콘 요소 저장
const navi = document.querySelector('.navi');
// 네비게이션 박스 요소 저장

// console.log('menuIcon', menuIcon);
// console.log('navi', navi);

menuIcon.addEventListener('click', function () {
  // console.log(this);
  this.classList.toggle('on');

  const navHeight = navi.scrollHeight;
  console.log(navHeight);
  if (this.classList.contains('on')) {
    // console.log(true);
    navi.style.height = navHeight + 'px';
  } else {
    // console.log(false);
    navi.style.height = 0;
  }
});

// If PC Size browser, navigation height to normal //
window.addEventListener('resize', function () {
  const winWidth = window.outerWidth;

  if (winWidth > 980) {
    menuIcon.classList.remove('on');
    navi.style.height = 'auto';
  } else {
    navi.style.height = 0;
  }
});
