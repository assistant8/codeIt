import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils'; //다른 모듈에서 함수 끌어다씀
import {useState} from 'react' //useState쓰려면

function getResult(me, other) { //가위바위보 결과 내는 함수
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  // hand와 otherHand를 state로 바꿔 주세요 - 내와 상대 상태
  const [hand, setHand] = useState('rock')
  const [otherHand, setOtherHand] = useState('scissor')

  //누른 버튼의 상태를 파라미터로 받아서
  const handleButtonClick = (nextHand) => { 
    // hand의 값을 nextHand 로 바꿔 주세요
    setHand(nextHand);
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
    setOtherHand(generateRandomHand());
  };

  const handleClearClick = () => { //둘다 rock으로 초기화
    // hand와 otherHand의 값을 'rock' 으로 바꿔주세요
    setHand('rock')
    setOtherHand('rock')
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p> 
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div> //각 버튼 누르면 이벤트 함수로 아래 함수 부름
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
