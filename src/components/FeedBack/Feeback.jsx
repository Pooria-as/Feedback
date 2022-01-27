import React, { useContext } from "react";
import { FeedbackContext } from "../../context/FeedBackContext";
import FeedBackItem from "./FeedBackItem";
import { Spinner } from "react-bootstrap";
const Feeback = () => {
  const { FeedBack, HandleDelete, HandleEdit, loading } =
    useContext(FeedbackContext);

  if (!FeedBack || FeedBack === 0) return <h1>No Feed back Yet</h1>;

  if (loading) {
    return (
      <div className="container d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div className="feedback-list">
      {FeedBack.map(({ ...other }, i) => (
        <FeedBackItem
          key={i}
          {...other}
          onDelete={HandleDelete}
          onEdit={HandleEdit}
        />
      ))}
    </div>
  );
};

export default Feeback;
