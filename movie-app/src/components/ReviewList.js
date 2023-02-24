import "./ReviewList.css"
import Rating from './Rating.js'
import { useState } from "react"
import ReviewForm from "./ReviewForm"

function ReviewListItem ({item, onDelete, onEdit}) { //ReviewList에서 받은 onDelete 여기서 handle~로 정의함 
    const handleDeleteClick = () => onDelete(item.id) //파라미터 (id) 받아와야하기 떄문
    const handleEditClick = () => onEdit(item.id)
    return (
        <div>
            <img className="img1" src={item.imgUrl}></img>
            <div>
                <p>id : {item.id}</p>
                <Rating value={item.rating}/>
                <p>rating : {item.rating}</p>
                <p>{item.content}</p>
                <button onClick={handleDeleteClick}>삭제</button>
                <button onClick={handleEditClick}>수정</button>
            </div>
            <hr></hr>
        </div>
    )
}

function ReviewList ({items, onDelete}) { //App에서 받은 함수 다시 ReviewListItem으로 넘겨줌
    const [editId, setEditId] = useState(null) //수정하는 아이템 id
    const handleCancel = () => setEditId(null)

    return (
        <div>
            <ul>                
                {items.map((item) => {
                    if(item.id==editId) { //map으로 아이템 펴줄때 수정누른건 리뷰폼 나오도록
                        const {title, rating, content} = item; //item에서 3개 뽑고
                        const intialValues = {title, rating, content}; //이 3개를 한 변수에 저장, 리뷰폼에 초기값으로 전달
                        return (
                            <li key={item.id}>
                              <ReviewForm intialValues={intialValues} onCancel={handleCancel}/>  
                            </li>
                          );
                    }                        
                    return (
                      <li key={item.id}>
                        {<ReviewListItem item={item} onDelete={onDelete} onEdit={setEditId}/>}{" "}
                      </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ReviewList;