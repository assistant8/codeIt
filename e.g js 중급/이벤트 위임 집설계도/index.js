// showTitle 함수를 완성해 주세요
function showTitle(e) {
	if(e.target.dataset.title){ //마우스 올려놓은 곳, 버블링되어 자식까지 영향
	  const span = document.createElement('span') //e.target.createElement('span') 아님 
	  span.classList.add('title')
	  span.textContent=e.target.dataset.title //innerText
	  e.target.append(span)
	  //span은 표시되는 플로팅 텍스트를 띄워주기 위한 것임
	}
  }
  
  // removeTitle 함수를 완성해 주세요
  function removeTitle(e) {
	  // 여기에 코드를 작성하세요
	  if(e.target.dataset.title){
		e.target.lastElementChild.remove() //remove(lastElementChild) 아님
	  }
  }
  
  // '대상'과 '타입'을 수정해 주세요
  const map = document.querySelector('.map')
  map.addEventListener('mouseover', showTitle);
  map.addEventListener('mouseout', removeTitle);
  // document도 가능 
  // 이벤트 위임이나 혹은 자식 요소의 영역에서도 이벤트가 발생하길 원할 때 mouseover/mouseout 타입의 이벤트를 활용