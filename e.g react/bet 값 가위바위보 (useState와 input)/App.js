import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0); //내 스코어
  const [otherScore, setOtherScore] = useState(0); //상대 스코어
  const [bet, setBet] = useState(1); //베팅포인트

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet); //이기면 내 스코어+bet
    if (comparison < 0) setOtherScore(otherScore + bet); //
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };
  
  //이벤트 핸들러에서 input 의 value 속성을 참조하려면 e.target.value
  //원래 js에선 input값 변경시 oninput으로 처리하지만 리액트는 onChange로 통합
  const handleBetChange = (e) => {
    // 여기에 코드를 작성하세요, input 값이 달라지면 이값을 bet으로 설정
    setBet(Number(e.target.value))
  };
  
  //예시 모범답 - 문자열 입력시 value가 이미 빈문자열이라 num이 0됨
  // let num = Number(e.target.value);
  // if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
  // if (num < 1) num = 1;
  // num = Math.floor(num);
  // setBet(num);

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input onChange={handleBetChange} type="number" value={bet} min={1} max={9}></input>
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
