import diceBlue01 from './assets/dice-blue-1.svg';
//asset에서 이미지 import

function Dice() {
  return <img src={diceBlue01} alt="주사위" />; 
  //diceBlue01 변수명 안쓰고 주소 그대로 쓰면 엑박 뜸
}

export default Dice;
