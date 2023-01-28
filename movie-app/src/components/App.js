import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useEffect, useState } from "react";
import { getReviews } from "../api";

const LIMIT = 6; //상수

function App({}) {
    const [order, setOrder] = useState("id")
    const [items, setItems] = useState([]) 
    const [hasNext, setHasNext] = useState(false) //
    const [offset, setOffset] = useState(0) //
    const [isLoading, setIsLoading] = useState(false)
    const sortedItem = items.sort((a,b) => b[order]-a[order]) 

    const handleRatingSort = () => {
        setOrder("rating")
    }

    const handleIdSort = () => {
        setOrder("id")
    }

    const handleLoad = async(options) => { //현재 무슨 order 버튼
        let result;
        try {
            setIsLoading(true)
            result = await getReviews(options);
        } catch(e) {
            console.log(e)
            return;
        } finally {
            setIsLoading(false)
        }
        const {reviews, paging} = result
        if(options.offset == 0){ //처음엔 0~5 
            setItems(reviews)
        }
        else{ //이전꺼 + reviews 
            setItems((prevItems) => [...items, ...reviews])
        }
        setOffset(options.offset + options.limit) //offset = 기존+6 최신화
        setHasNext(paging.hasNext) //이다음 데이터있는지 paging에서 hasNext 확인
    }
    //api response에 paging과 reviews 프로퍼티 존재

    const handleLoadMore = async() => { //버튼 누르면 실행
        await handleLoad({order, offset, limit:LIMIT}) //지정 offset~6개 불러옴
    }

    useEffect(()=>{
        handleLoad({order, offset:0, limit:LIMIT});
    }, [order])

   const handleDelete = (id) => { 
        const newItems = items.filter((item)=>{ 
            return item.id !== id
        })
        setItems(newItems) 
    }

    return (
        <div>
            <div>
                <button onClick={handleRatingSort}>rating</button>
                <button onClick={handleIdSort}>id</button>
            </div>            
            <ReviewList items={sortedItem} onDelete={handleDelete}/> 
            {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>}
        </div>
    ); //hasNext 있으면 button 렌더링 해라 or hasNext 아니면 버튼 투명화
}

export default App;