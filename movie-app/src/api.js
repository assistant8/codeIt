export async function getReviews() {
    const response = await fetch('https://learn.codeit.kr/1636/film-reviews/')
    const body = await response.json();
    return body; //결국 저 링크의 json 파일 리턴
}