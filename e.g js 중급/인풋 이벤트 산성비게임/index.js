const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!๐');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

// ์ฌ๊ธฐ์ ์ฝ๋๋ฅผ ์์ฑํ์ธ์
function func1(e) {
  const words = document.querySelectorAll('.word'); //word class ๊ฐ์ง ํ๊ทธ ๋ค ๊ฐ์ ธ์ค๊ณ 
  for(let i=0;i<words.length;i++){ //๊ทธ ํ๊ทธ๋ค ๋ค ๋๋ฉด์
    if(input.value === words[i].dataset.word){ //์ธํ ๊ฐ์ด ๊ทธ ํ๊ทธ๋ค์ ์์ผ๋ฉด 
      input.value = '';
      words[i].remove()
      checker()
    }
  }
}
//input ๊ฐ ๋ณํ๊ฐ ์๊ธธ๋๋ง๋ค ํจ์๋ก ์ฒดํฌ
input.addEventListener('change', func1)