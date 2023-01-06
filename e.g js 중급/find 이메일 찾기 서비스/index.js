const nameInput = document.querySelector('#user-name');
const phoneInput = document.querySelector('#phone-number');
const findBtn = document.querySelector('#find');

const data = [ //전역변수로 선언한 듯
  { userName: '막대기', phoneNumber: '01012341111', email: 'stick@go_do_it.kr' },
  { userName: 'young', phoneNumber: '01012342222', email: 'kang@go_do_it.kr' },
  { userName: '코린이', phoneNumber: '01012343333', email: 'corin2@go_do_it.kr' },
  { userName: 'captain', phoneNumber: '01012344444', email: 'crew@go_do_it.kr' },
  { userName: 'YH', phoneNumber: '01012345555', email: 'whyH@go_do_it.kr' },
  { userName: '망고쥬스', phoneNumber: '01012346666', email: 'drinkMango@go_do_it.kr' },
  { userName: 'nemoming', phoneNumber: '01012347777', email: 'ractAngle@go_do_it.kr' },
  { userName: '강그루', phoneNumber: '01012348888', email: 'riverTree@go_do_it.kr' },
  { userName: '개룩발룩', phoneNumber: '01012349999', email: 'checkShirts@go_do_it.kr' },
  { userName: '오렌지쥬스', phoneNumber: '01012341010', email: 'delmonte@go_do_it.kr' },
];

function findEmail() {
  const nameValue = nameInput.value; //html에서의 input 위치 가져와서 그 인풋의 값 가져옴
  const phoneValue = phoneInput.value;

  // 여기에 코드를 작성하세요
  const user = data.find((info)=>{ //배열에서 각 요소마다 접근
    return (info.userName===nameValue && info.phoneNumber===phoneValue) //이러한 조건인 요소 객체 통째로 반환 => user
  })


  const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.';

  alert(message);
}

findBtn.addEventListener('click', findEmail); //find 클릭 누르면 위 함수 발동