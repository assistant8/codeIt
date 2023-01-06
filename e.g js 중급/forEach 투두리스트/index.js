const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
data.forEach((todo, index) => { //todo는 요소 하나하나 (title,isClear 포함한 객체 하나)
  const li = document.createElement('li'); //li = document.createElement 주의, li 태그 만듦
  li.textContent = `${index+1}. ${todo.title}`
  li.classList.add('item') 
  if(todo.isClear == true) {
    li.classList.add('done')
  }
  list.append(li) //append로 li를 어디에 넣을지 정함
})