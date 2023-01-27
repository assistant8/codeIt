import { useState } from 'react';
import FoodList from './FoodList';
import mockItems from '../mock.json';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState(mockItems)

  const handleNewestClick = () => setOrder('createdAt');

  const handleCalorieClick = () => setOrder('calorie');

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id!==id)
    setItems(newItems)
  }

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
