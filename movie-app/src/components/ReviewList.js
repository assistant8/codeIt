import "./ReviewList.css"

function ReviewListItem ({item}) {
    return (
        <div>
            <img className="img1" src={item.imgUrl}></img>
            <div>
                <p>id : {item.id}</p>
                <p>rating : {item.rating}</p>
                <p>{item.content}</p>
            </div>
            <hr></hr>
        </div>
    )
}

function ReviewList ({items}) {
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{<ReviewListItem item={item} />} </li>
                })}
            </ul>
        </div>
    )
}

export default ReviewList;