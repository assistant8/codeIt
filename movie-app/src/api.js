export async function getReviews({order='createdAt', offset=0, limit=6}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`
    const response = await fetch(`https://learn.codeit.kr/1636/film-reviews?${query}`)
    const body = await response.json();
    return body; 
}
//handleJson에서 받은 order 형식을 서버에 요청하는 url의 쿼리로 넘김