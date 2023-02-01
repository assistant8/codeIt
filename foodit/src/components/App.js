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

  // nextCursor가 있으면 쿼리 보낸거 받아오고 그걸 cursor로 할당 
  // null 이면 더보기 버튼 못누르게
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
    handleLoad({order, cursor}); //받는 함수 파라미터가 orderQuery (객체 이므로)
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  //처음과 order 바꿀 때
  useEffect(() => {
    handleLoad({order});
  }, [order]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button disabled={!cursor} onClick={handleLoadMore}>더보기</button>
    </div>
  );
}

export default App;
