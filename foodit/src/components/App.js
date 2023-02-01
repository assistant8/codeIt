import { useEffect, useState } from 'react';
import { getFoods } from '../api';
import FoodList from './FoodList';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [cursor, setCursor] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false) //
  const [loadingError, setLoadingError] = useState("") //

  const handleNewestClick = () => setOrder('createdAt');

  const handleCalorieClick = () => setOrder('calorie');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result; //이렇게 선언해서 나눈건 try문 블록 안에서 선언하면 아래서 사용 불가 undef
    try {
      setLoadingError(null)
      setIsLoading(true) //이게 위에 있어야 먼저 버튼이 비활되고 불러오기 시작하지
      result = await getFoods(options); 
    } catch (e) {
      setLoadingError(e) //e를 객체로 받아 아래에서 띄워주려고
      return
    } finally {
      setIsLoading(false) //catch에 return이 있어도 그 직전에 finally와서 코드 실행하고 return으로 돌아감
    }
    //이 이후는 실행 finally 이후 (에러 시 catch에서 return만 하지 않는 이상)
    const { foods, paging: { nextCursor } } = result;
    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(nextCursor);
  };

  const handleLoadMore = () => {
    handleLoad({
      order,
      cursor,
    });
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  useEffect(() => {
    handleLoad({
      order,
    });
  }, [order]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      {cursor && <button disabled={isLoading} onClick={handleLoadMore}>더보기</button>}
      {loadingError?.message && <span>{loadingError.message}</span> }
    </div>
  ); //e 객체 안에 있는 message 프로퍼티
  //loadingError가 있는지 먼저 확인 후 그리고 message가 있는지 2번 확인하는 느낌?
}

export default App;
