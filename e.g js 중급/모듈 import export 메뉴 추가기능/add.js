const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

function add(data) {
  const inputValue = addInput.value;
  const index = data.length;

  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `<b>${index + 1}</b>${inputValue}<button class="del-btn" data-index="${index}">x</button>`;
  list.append(li);

  data.push(inputValue);

  addInput.value = '';
  addInput.focus();
}

function emptyAlert() {
  alert('고민되는 메뉴를 입력해 주세요.');
  addInput.focus();
}

function maxAlert() {
  alert('메뉴는 최대 5개까지만 고민할 수 있습니다.');
  addInput.value = '';
}

// 여기까지 data를 가져오는건 최대치 확인 위함 뿐임, 레거시 남기는 것
// 위 add 함수보면 실제 list html에 넣는 것은 inputValue가 함
export function addMenu(data) {
  const inputValue = addInput.value;

  if (inputValue === '') {
    emptyAlert();
  } else if (data.length > 4) {
    maxAlert();
  } else {
    add(data);
  }
}
