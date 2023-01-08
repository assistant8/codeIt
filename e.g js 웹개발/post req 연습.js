fetch("https://learn.codeit.kr/api/members", {
    method: 'POST',
    body: JSON.stringify(newMember)
})
    .then((response) => (response.text()))
    .then((result) => (console.log(result)));

const newMember = {
    name: 'a',
    email: 'd',
    department: 'c',
}

