// 여기에 코드를 작성하세요
import {addMenu} from './add.js'
// addMenu 함수 안에 add, emptyAlert 등의 함수가 쓰이지만 이거만 임포트 해도 됨
// 임포트해도 여기서 실행이 아닌 add.js에서 실행됨, 연결다리만 놓은 셈

const data = []; //
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

addBtn.addEventListener('click', () => addMenu(data)); 
//add 버튼 클릭하면 addMenu 함수 콜

addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
//addinput에서 엔터 누르면 addMenu 함수 콜
// e.code === 'ENTER' 가 true 로 평가되어야 addMenu(data) 가 호출
// addMenu(data)를 리턴하라는 듯 보이지만, 어떤 값이 아니라 실행문이라 함수가 실행됨