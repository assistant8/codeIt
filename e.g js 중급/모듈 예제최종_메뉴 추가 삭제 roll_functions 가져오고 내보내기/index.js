//tags.js로 매번 html에 접근하기 위한 document.querySelect 생략
import { addBtn, addInput, list, rollBtn } from './tags.js';
//functions.js는 각 모듈에서 쓰이는 함수를 모듈마다 취합하고 index.js 여기서 한번에 뿌려주기 위함
//안그러면 import addMenu from 'add.js' 이거 3줄 반복해야함
import {addMenu, deleteMenu, rollMenu} from './functions.js'

const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));
