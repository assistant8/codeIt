import "./ReviewList.css"

function ReviewListItem ({item, onDelete}) {
    const handleDeleteClick = () => onDelete(item.id)
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

function ReviewList ({items, onDelete}) {
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