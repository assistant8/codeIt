import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useState } from "react";
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

    //{} 이유는 json 안에 reviews라는 객체 안에 배열이 있기 때문
    const handleJson = async() => { //비동기 함수임 표시
        const {reviews} = await getReviews(); //promise 객체 리턴 코드임 표시
        setItems(reviews)
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
            <button onClick={handleJson}>불러오기</button>
            <ReviewList items={sortedItem} onDelete={handleDelete}/> 
        </div>
    );
}

export default App;