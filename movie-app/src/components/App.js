import ReviewList from "./ReviewList";
import mockItems from "../mock.json"
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewForm from "./ReviewForm.js"

const LIMIT = 6; //상수

function App({}) {
    const [order, setOrder] = useState("id")
    const [items, setItems] = useState([]) //리뷰 목록
    const [hasNext, setHasNext] = useState(false) 
    const [offset, setOffset] = useState(0) 
    const [isLoading, setIsLoading] = useState(false)
    const [loadingError, setLoadingError] = useState(null) 
    const sortedItem = items.sort((a,b) => b[order]-a[order]) 

    const handleRatingSort = () => {
        setOrder("rating")
    }

    const handleIdSort = () => {
        setOrder("id")
    }

    //try문 안에 json 받아오는 것과 그동안 setLoading 참으로 설정
    const handleLoad = async(options) => { //현재 무슨 order 버튼
        let result;
        try {
            setIsLoading(true)
            setLoadingError(null)
            result = await getReviews(options);
        } catch(e) {
            console.log(e)
            setLoadingError(e)
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

    //이 동작은 비동기라서 콜백 형태로 작성해야함
    const handleSubmitSuccess = (review) => {
        setItems((prevItems) => [review, ...prevItems])
    }

    useEffect(()=>{
        handleLoad({order, offset:0, limit:LIMIT}); //처음이라 order 변경시에만 발동
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
            <ReviewForm onSubmitSuccess={handleSubmitSuccess}/>
            <ReviewList items={sortedItem} onDelete={handleDelete}/> 
            {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>}
            {loadingError?.message && <span>{loadingError.message}</span>}
        </div>
    ); 
}

export default App;