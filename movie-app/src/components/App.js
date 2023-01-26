import ReviewList from "./ReviewList";
import item from "../mock.json"

function App({}) {
  return (
    <div>
      <ReviewList item={item} />
    </div>
  );
}

export default App;