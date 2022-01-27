import Card from "../Shared/Card";
import  {FaEdit, FaTimes}  from "react-icons/fa";
const FeedBackItem = ({ id,text, rating,onDelete,onEdit }) => {
  return (
    <Card DarkMode={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={()=>onDelete(id)}>
        <FaTimes/>
      </button>
      <button className="edit" onClick={()=>onEdit({id,text,rating})}>
        <FaEdit/>
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedBackItem;
