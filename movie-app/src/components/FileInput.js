import { useEffect, useRef } from "react";

function FileInput({ name, value, onChange }) { //value는 후에 미리보기 등으로 활용 가능해서 일단 받아놓음..
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue); //부모의 것 실행 (prop으로 받음)
  };

  useEffect(()=>{
    if(inputRef.current) {
        console.log(inputRef)
    }
  }, [])

  return <input type="file" onChange={handleChange} ref={inputRef}/>;
} 

export default FileInput;