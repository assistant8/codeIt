import './FoodList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content, createdAt } = item;
  const handleDeleteButton = () => {
    onDelete(item.id)
  }

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul className="FoodList">
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
