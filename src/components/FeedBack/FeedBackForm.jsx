import React, { useState, useRef } from "react";
import Rating from "../Rating/Rating";
import Card from "../Shared/Card";

const FeedBackForm = ({ HandleCreate }) => {
  const [FeedBackText, setFeedBackText] = useState("");
  const [DissableButton, setDissableButton] = useState(true);
  const [FeedBackTextValidation, setFeedBackTextValidation] = useState("");
  const [rating, setRating] = useState(10);
  const FeedBackTextValue = useRef("");

  const HandleChange = () => {
    const feedback = FeedBackTextValue.current.value;
    if (feedback.length >= 10) {
      setDissableButton(false);
    } else if (feedback === "") {
      setDissableButton(true);
      setFeedBackTextValidation("your feedback most be 10 charctor");
    }
  };

 const SubmitHandler = (e)=>
  {
    e.preventDefault()
    const data = {
      text :FeedBackTextValue.current.value,
      rating:rating
    }
    HandleCreate(data)
   
  }

  return (
    <Card>
      <Rating select={(rating) => setRating(rating)} />
      <h4 className="text text-center">What's your feedback ?</h4>
      <form onSubmit={SubmitHandler}>
        <div className="container d-flex justify-content-center input-group">
          <input
            placeholder="feedback ..."
            ref={FeedBackTextValue}
            onChange={HandleChange}
          />

          <button
            type="submit"
            className="btn btn-sm btn-primary"
            disabled={DissableButton}
          >
            Send ✔
          </button>
        </div>
        {FeedBackTextValidation !== "" ? (
          <span className="text text-danger">{FeedBackTextValidation} </span>
        ) : (
          ""
        )}
      </form>
    </Card>
  );
};

export default FeedBackForm;
