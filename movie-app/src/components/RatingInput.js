import { useState } from "react";
import Rating from "./Rating";
import './RaitingInput.css'

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  ); //hover때 value 그렇게 설정하고 mouseOut 때 기존 value로 원상복구 = 미리보기 기능처럼 만듦
}

export default RatingInput;
