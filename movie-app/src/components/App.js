import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useState } from "react";

function App({}) {
    const [sort, setSort] = useState("id")
    const [items, setItems] = useState(mockItems) //배열 수정도 useState로
    const sortedItem = items.sort((a,b) => b[sort]-a[sort]) 

    const handleRatingSort = () => {
        setSort("rating")
    }

    const handleIdSort = () => {
        setSort("id")
    }

    const handleDelete = (id) => {
        console.log(11)
        const newItems = items.filter((item)=>{
            return item.id !== id
        })
        setItems(newItems)
    }

    return (
        <div>
            <button onClick={handleRatingSort}>rating</button>
            <button onClick={handleIdSort}>id</button>
            <ReviewList items={sortedItem} onDelete={handleDelete}/>  
        </div>
    );
}

export default App;