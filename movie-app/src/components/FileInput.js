import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) { //value는 후에 미리보기 등으로 활용 가능해서 일단 받아놓음..
  const inputRef = useRef(); //현재 input 상태?
  const [preview, setPreview] = useState(); //이미지 url 담을 변수

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue); //부모의 것 실행 (prop으로 받음)
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current
    if(inputNode) { //파일이 있다면 value 없애고 
        inputNode.value=''; //초기화
        onChange(name, null) //name은 imgtitle (프로퍼티)니까 이게 없다는걸 알려야하므로 적어야지
    }
  }

  useEffect(()=>{
    if(!value) return; //혹시 파일 없으면 아래 실행시 오류
    const nextPreview = URL.createObjectURL(value)
    setPreview(nextPreview) //이미지 태그에 적용할 url    
    return () => {
        setPreview()
        URL.revokeObjectURL(nextPreview)
    }
  }, [value])

  return (
    <div>
        <img src={preview} alt="이미지 미리보기"></img>
        <input type="file" onChange={handleChange} ref={inputRef}/>
        {value && <button onClick={handleClearClick}> delete </button> }
    </div>
  ); //value는 위 파라미터에서, 현재 파일이 있는지 확인 위함, 있으면 render
} 

export default FileInput;