import ReviewList from "./ReviewList";
import items from "../mock.json"
import { useState } from "react";

function App({}) {
    //리뷰리스트.js가 아닌 app에서 하는건 버튼으로 조절 가능하고, 다른 순서로도 정렬 컨트롤 하게 되도록
    const [sort, setSort] = useState("id")
    const sortedItem = items.sort((a,b) => b[sort]-a[sort]) 
    
    //각 함수 내에서 sort 함수 쓰니까 안됨 ;;
    //하나의 sortedItem 함수를 공용으로 쓰고 id, rating으로 할지를 정해줌
    const handleRatingSort = () => {
        setSort("rating")
    }

    const handleIdSort = () => {
        setSort("id")
    }

    return (
        <div>
            <button onClick={handleRatingSort}>rating</button>
            <button onClick={handleIdSort}>id</button>
            <ReviewList items={sortedItem} />  //
        </div>
    );
}

export default App;