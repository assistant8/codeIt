import "./ReviewList.css"

function ReviewListItem ({item}) {
    return (
        <div>
            <img className="img1" src={item.imgUrl}></img>
            <div>
                <p>{item.id}</p>
                <p>{item.rating}</p>
                <p>{item.content}</p>
            </div>
        </div>
    )
}

function ReviewList ({items}) {
    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li>{<ReviewListItem item={item} />} </li>
                })}
            </ul>
        </div>
    )
}

export default ReviewList;