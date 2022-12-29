const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  event.target.classList.toggle('done')
}
//toggle은 한 속성을 on / off 하도록 하는 것

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
for(let i=0;i<3;i++){
  items[i].addEventListener('click', updateToDo)
}

// 테스트 코드
items[2].removeEventListener('click', updateToDo);