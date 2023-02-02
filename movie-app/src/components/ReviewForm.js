import { useState } from "react";
import "./ReviewForm.css"

function ReviewForm() {

    const [values, setValues] = useState({
        title : "",
        rating : 0,
        content : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target; //target은 input 태그겠고, 그 안에 프로퍼티 name, value만 갖고 오겠다
        //위는 방금 변경된 데이터
        setValues({...values, [name]: value}) //변경 안된건 values에, 방금 이벤트 된 value를 추가
    }

    const handleSubmit = (e) => { 
        e.preventDefault() // 원래 바로 전송되는 기본 성질 (페이지 초기화) 막기 위함
        console.log(values)
    }

    return (
        <form className="ReviewForm" onSubmit={handleSubmit}> 
          <input name="title" value={values.title} onChange={handleChange} /> 
          <input type="number" name="rating" value={values.rating} onChange={handleChange} />
          <textarea name="content" value={values.content} onChange={handleChange} />
          <button type="submit">전송</button>
        </form> 
    );
    
}

export default ReviewForm;