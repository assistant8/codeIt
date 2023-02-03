import { useState } from "react"

function FileInput () {
    const [file, setFile] = useState()
    
    const handleFile = (e) => {
        console.log(e.target.files)
    }

    return (<input type="file" value={file} onChange={handleFile}></input>) //input 태그 하나 주는 것
} //type=file 만 적어도 업로드 버튼 형식 갖춰짐 / onChange로 파일 올린 뒤 컨트롤

export default FileInput