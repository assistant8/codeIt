import { useState } from "react"

function FileInput () {
    const [file, setFile] = useState()
    
    const handleFile = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    return (<input type="file" onChange={handleFile}></input>) //input 태그 하나 주는 것
} //type=file 만 적어도 업로드 버튼 형식 갖춰짐 / onChange로 파일 올린 뒤 컨트롤

export default FileInput