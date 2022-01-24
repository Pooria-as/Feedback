import Card from "../Shared/Card";
import  {FaTimes}  from "react-icons/fa";
const FeedBackItem = ({ id,text, rating,onDelete }) => {
  return (
    <Card DarkMode={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={()=>onDelete(id)}>
        <FaTimes/>
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedBackItem;
