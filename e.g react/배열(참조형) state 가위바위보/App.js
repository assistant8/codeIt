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
  const [gameHistory, setGameHistory] = useState([]); //처음 빈배열로 초기화

  //이제 누른 버튼의 상태를 가지고 나와 상대 상태 설정하고
  //그 둘의 상태로 결과를 내고 그걸 gameHistory에 기록
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해 주세요
    // 아렇게 spread 구문 쓴 이유는 이렇게 배열 매번 새로 만들어줘야 render됨
    setGameHistory([...gameHistory, nextHistoryItem])
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    // gameHistory를 비워주세요
    setGameHistory([])
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p> //gameHistory를 표시하되 ,로 구분
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
