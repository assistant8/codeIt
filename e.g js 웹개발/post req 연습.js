fetch("https://learn.codeit.kr/api/members", { //두번째 파라미터는 객체 형식
    method: 'POST', //메소드 특정
    body: JSON.stringify(newMember) //json 형태로 추가해줘야 하므로 string화
})
    .then((response) => (response.text()))
    .then((result) => (console.log(result)));

const newMember = {
    name: 'a',
    email: 'd',
    department: 'c',
}

