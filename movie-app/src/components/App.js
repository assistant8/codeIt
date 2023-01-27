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

    //App에서 이걸 하는 이유는 sort와 마찬가지, items 전체에서 item 한 묶음을 삭제해야하니
    //id를 파라미터로 가졌지만 prop으로 내려갈땐 () 쓰면 실행되어버리니 받은 compo에서 재정의 해줘야함
    const handleDelete = (id) => { //이게 계속 prop으로 전해져 내려가는 함수
        console.log(11)
        const newItems = items.filter((item)=>{ //item 중 받은 id가 아닌거로만 items 꾸림
            return item.id !== id
        })
        setItems(newItems) //새 정의된 배열로 setItems
    }

    return (
        <div>
            <button onClick={handleRatingSort}>rating</button>
            <button onClick={handleIdSort}>id</button>
            <ReviewList items={sortedItem} onDelete={handleDelete}/>  //ReviewList에 handleDelete 넘김
        </div>
    );
}

export default App;