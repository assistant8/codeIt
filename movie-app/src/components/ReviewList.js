import "./ReviewList.css"

function ReviewListItem ({item, onDelete}) { //ReviewList에서 받은 onDelete 여기서 handle~로 정의함 
    const handleDeleteClick = () => onDelete(item.id) //파라미터 (id) 받아와야하기 떄문
    return (
        <div>
            <img className="img1" src={item.imgUrl}></img>
            <div>
                <p>id : {item.id}</p>
                <p>rating : {item.rating}</p>
                <p>{item.content}</p>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
            <hr></hr>
        </div>
    )
}

function ReviewList ({items, onDelete}) { //App에서 받은 함수 다시 ReviewListItem으로 넘겨줌
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{<ReviewListItem item={item} onDelete={onDelete}/>} </li>
                })}
            </ul>
        </div>
    )
}

export default ReviewList;