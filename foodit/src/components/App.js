import { useEffect, useState } from 'react';
import { getFoods } from '../api';
import FoodList from './FoodList';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null); // 커서 처음
  const [isFinished, setIsFinished] = useState(false) //끝났을때 true로 할 것 

  const handleNewestClick = () => setOrder('createdAt');

  const handleCalorieClick = () => setOrder('calorie');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // nextCursor가 없어도 마지막 페이지는 render 해야지(주의), 그래서 현재 cursor 기준으로 함
  // cursor 없으면 (처음임) 전체 렌더
  // cursor 있으면 (더보기겠지) 이전 데이터 + cursor 이용 새 데이터
  // 쿼리 보낸거 받아오고 그걸 cursor로 할당 
  const handleLoad = async (orderQuery) => {
    const { foods, paging } = await getFoods(orderQuery);
    if(!orderQuery.cursor) { //처음 렌더링 시 - 커서 없을테니
      setItems(foods);
    } else { //더보기 눌렀을 때
      setItems((prevItems)=>[...prevItems, ...foods])
    }
    setCursor(paging.nextCursor);
  };
  
  // 더보기 버튼 누를 때
  const handleLoadMore = () => {
    handleLoad({order, cursor}); //더 받을 땐 cursor 이용 / 받는 함수 파라미터가 orderQuery (객체 이므로)
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  //처음과 order 바꿀 때
  useEffect(() => {
    handleLoad({order}); //첨엔 cursor 필요 없지
  }, [order]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button disabled={!cursor} onClick={handleLoadMore}>더보기</button>
    </div>
  ); //현 cursor가 없으면 (nextcursor로 할당받을 때 null) 더보기 금지
}

export default App;
