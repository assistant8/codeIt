import FoodList from './FoodList';
import items from '../mock.json';
import {useState} from "react"

function App() {
  const [sort, setSort] = useState("createdAt")
  const sortedItem = items.sort((a,b) => b[sort]-a[sort])
  const handleCreatedSort = () => {
    setSort("createdAt")
  }
  const handleCalorieSort = () => {
    setSort("calorie")
  }
  return (
    <div>
      <button onClick={handleCreatedSort}>최신순</button>
      <button onClick={handleCalorieSort}>칼로리순</button>
      <FoodList items={sortedItem} />
    </div>
  );
}

export default App;
