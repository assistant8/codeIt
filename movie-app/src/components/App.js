import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App({}) {
    const [sort, setSort] = useState("id")
    const [items, setItems] = useState([]) //처음엔 데이터 안뜨게
    const sortedItem = items.sort((a,b) => b[sort]-a[sort]) 

    const handleRatingSort = () => {
        setSort("rating")
    }

    const handleIdSort = () => {
        setSort("id")
    }

    const handleJson = async() => { 
        const {reviews} = await getReviews(); 
        setItems(reviews)
    }

    useEffect(()=>{
        handleJson();
    },[])

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