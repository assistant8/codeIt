import HandIcon from './HandIcon';

//다른 컴포넌트의 prop으로 다시 내려 주는 경우, 2번 전달
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value); //onClick은 여기 이벤트리스너에 써줌
  return ( //app에서 받은 2개 prop 중 onClick은 여기 버튼에서 쓰고 value는 HandIcon에 한번더 전달 
    <button onClick={handleClick}>
      <HandIcon value={value} />
    </button>
    )
}

export default HandButton;
