//이게 음식 하나마다 표시할 정보 한 묶음
//이건 아래 foodlist에서 쓰이고 말 것, export는 어차피 아래만됨
//이건 별도 컴포라 사실 다른 파일에서 해도되지만 짧고 한눈에 보기 쉽게 한페이지에 씀
function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
}

//음식 데이터 전체를 map으로 하나씩 추출해서 하나하나마다 FoodListItem 호출해서 list 하나씩 리턴
function FoodList({ items }) {
  return <ul>
            {items.map((item) => { //전체를 한 음식마다로 분해
              return <li> <FoodListItem item={item} /> </li>
            })}
        </ul>
}

export default FoodList;