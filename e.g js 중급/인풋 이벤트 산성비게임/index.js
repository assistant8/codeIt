const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!👏');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

// 여기에 코드를 작성하세요
function func1(e) {
  const words = document.querySelectorAll('.word'); //word class 가진 태그 다 가져오고
  for(let i=0;i<words.length;i++){ //그 태그들 다 돌면서
    if(input.value === words[i].dataset.word){ //인풋 값이 그 태그들에 있으면 
      input.value = '';
      words[i].remove()
      checker()
    }
  }
}
//input 값 변화가 생길때마다 함수로 체크
input.addEventListener('change', func1)