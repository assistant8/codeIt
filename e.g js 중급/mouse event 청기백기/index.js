const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

function flagUp(e) {
  if(e.button==0){
    flagBlue.classList.toggle('up')
    //flagBlue.classList.add('up') 가능
    //이것의 의미는 flagblue 클래스 가진 애들에게 up이라는 클래스 하나 더 주는 것임 
  }
  else if(e.button==2) {
    flagWhite.classList.toggle('up')
  }

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막아주세요 
document.addEventListener('contextmenu', function (event) {
  event.preventDefault()
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);