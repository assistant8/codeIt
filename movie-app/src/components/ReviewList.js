function ReviewList ({items}) {
    return (
        <div>
            <ul>
                {items.map((item) => {
                    return <li>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default ReviewList;