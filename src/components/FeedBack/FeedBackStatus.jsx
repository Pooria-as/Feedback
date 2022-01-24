import React from "react";

const FeedBackStatus = ({ feebacks }) => {
  let Average =
    feebacks.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.rating;
    },0) / feebacks.length;

  Average = Average.toFixed(0).replace(/[.,]0$/,'');

  return (
    <div className="container feedback-stats">
      <h4>FeedBack Count : {feebacks.length} </h4>
      <h4>Average FeedBack :{isNaN(Average) ? 'No Feed Back' :Average} </h4>
    </div>
  );
};

export default FeedBackStatus;
