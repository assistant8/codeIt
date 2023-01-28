import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App({}) {
    const [order, setOrder] = useState("id")
    const [items, setItems] = useState([]) //처음엔 데이터 안뜨게
    const sortedItem = items.sort((a,b) => b[order]-a[order]) 

    const handleRatingSort = () => {
        setOrder("rating")
    }

    const handleIdSort = () => {
        setOrder("id")
    }

    const handleJson = async(orderQuery) => { //현재 무슨 order 버튼
        const {reviews} = await getReviews(orderQuery); //order 형식 api에 넘겨줌(쿼리)
        setItems(reviews)
    }

    //데이터 불러오기는 처음과 order가 변경되었을 때만!
    useEffect(()=>{
        handleJson(order);
    }, [order])

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