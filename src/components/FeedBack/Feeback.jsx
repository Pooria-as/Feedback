import React from "react";
import FeedBackItem from "./FeedBackItem";
const Feeback = ({ feebacks,HandleDelete }) => {
  if (!feebacks || feebacks.length === 0) return <h1>No Feed back Yet</h1>;

  return (
    <div className="feedback-list">
      {feebacks.map(({  ...other },i) => (
        <FeedBackItem key={i} {...other} onDelete={HandleDelete} />
      ))}
    </div>
  );
};

export default Feeback;
