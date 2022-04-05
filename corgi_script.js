let curPos = 0; // 현재 보여지는 이미지의 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 저장할 변수
const IMAGE_WIDTH = 640; // 이미지는 640 만큼씩 이동

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');

function next() {
  if (curPos < 3) {
    prevBtn.removeAttribute('disabled');
    positionValue -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`; // JS로 이미지 위치 속성을 변경해줌 (transform, translateX는 원래 CSS 함수이다.)
    curPos += 1;
  }
  if (curPos === 3) {
    nextBtn.setAttribute('disabled', 'true');
  }
}

function prev() {
  if (curPos > 0) {
    nextBtn.removeAttribute('disabled');
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    curPos -= 1;
  }
  if (curPos === 0) {
    prevBtn.setAttribute('disabled', 'true');
  }
}

// 초기화 함수 정의 : 첫 번째 이미지가 보여지는 초기화면에서 prevBtn 비활성화
function init() {
  prevBtn.setAttribute('disabled', 'true');
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
}

// 초기화
init();
