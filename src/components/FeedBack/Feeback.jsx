import React, { useContext } from "react";
import { FeedbackContext } from "../../context/FeedBackContext";
import FeedBackItem from "./FeedBackItem";
const Feeback = () => {
  const {FeedBack,HandleDelete,HandleEdit} = useContext(FeedbackContext);

  if (!FeedBack || FeedBack === 0)
    return <h1>No Feed back Yet</h1>;
  return (
    <div className="feedback-list">
      {FeedBack.map(({ ...other }, i) => (
        <FeedBackItem key={i} {...other} onDelete={HandleDelete} onEdit={HandleEdit} />
      ))}
    </div>
  );
};

export default Feeback;
