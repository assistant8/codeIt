function FileInput({ name, value, onChange }) { //value는 후에 미리보기 등으로 활용 가능해서 일단 받아놓음..
  
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue); //부모의 것 실행 (prop으로 받음)
  };

  return <input type="file" onChange={handleChange} />;
} //input 값 바뀌면 위 함수 호출, 여기서 onChange는 위 받은 것과 별개

export default FileInput;