const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성하세요
function sendMyText2(e){
  if(e.key === 'Enter' && !e.shiftKey){
    //이벤트가 발생할 때 shift키를 눌렀는지를 불린 형태로 담고 있어요.
    sendMyText();
    e.preventDefault();
    //원래 textarea 태그에 커서를 두고 enter키 버튼을 누르면 줄바꿈이 됩니다. 이건 브라우저의 기본 동작
    
  }
  
}
input.addEventListener('keypress', sendMyText2)