import { useState } from "react";
import "./ReviewForm.css"

function ReviewForm() {

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');


    const handleTitleChange = (e) => { //변할때마다 title로 state 변경
        setTitle(e.target.value)
    }

    const handleRatingChange = (e) => {
        const nextRating = Number(e.target.value);
        setRating(nextRating);
    };
    
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <form className="ReviewForm">
          <input value={title} onChange={handleTitleChange} />
          <input type="number" value={rating} onChange={handleRatingChange} />
          <textarea value={content} onChange={handleContentChange} />
        </form>
    );
    
}

export default ReviewForm;