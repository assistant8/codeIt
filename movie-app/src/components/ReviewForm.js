import { useState } from "react";
import { createReview } from "../api";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import "./ReviewForm.css";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    //파일은 이거만 사용
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    //인풋들은 이거랑 위에도 사용
    const { name, value } = e.target;
    handleChange(name, value);
  };

  //폼 다 작성 후 버튼 누르면 data 담은 formData 만들어서 createReview 함수 통해 보내줌 (api에 데이터 추가됨)
  //폼은 초기화
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('title', values.title);
    formData.append('rating', values.rating);
    formData.append('content', values.content);
    formData.append('imgFile', values.imgFile);
    await createReview(formData)
    setValues({
      title: "",
      rating: 0,
      content: "",
      imgFile: null,
    })
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
