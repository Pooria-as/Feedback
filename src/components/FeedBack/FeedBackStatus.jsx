import React, { useContext } from "react";
import { FeedbackContext } from "../../context/FeedBackContext";

const FeedBackStatus = () => {
  const { FeedBack } = useContext(FeedbackContext);

  let Average =
    FeedBack.reduce((pre, cur) => {
      return pre + parseFloat(cur.rating);
    }, 0) / FeedBack.length;



  return (
    <div className="container feedback-stats">
      <h4>FeedBack Count : {FeedBack.length} </h4>
      <h4>Average FeedBack :{isNaN(Average) ? "No Feed Back" : Average} </h4>
    </div>
  );
};

export default FeedBackStatus;
