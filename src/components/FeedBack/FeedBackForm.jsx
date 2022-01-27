import React, { useState, useRef, useContext, useEffect } from "react";
import Rating from "../Rating/Rating";
import Card from "../Shared/Card";
import { v4 as uuidv4 } from "uuid";
import { FeedbackContext } from "../../context/FeedBackContext";

const FeedBackForm = () => {
  const [Text, setText] = useState("");
  const [DissableButton, setDissableButton] = useState(true);
  const [FeedBackTextValidation, setFeedBackTextValidation] = useState("");
  const [rating, setRating] = useState(10);
  const { EditFeedBack, HandleCreate, Edit } = useContext(FeedbackContext);

  useEffect(() => {
    if (EditFeedBack.editable) {
      setText(EditFeedBack.item.text);
      setRating(EditFeedBack.item.rating);
    }
  }, [EditFeedBack]);

  const HandleChange = (e) => {
    const feedback = e.target.value;
    if (feedback.length >= 10) {
      setDissableButton(false);
    } else if (feedback === "") {
      setDissableButton(true);
      setFeedBackTextValidation("your feedback most be 10 charctor");
    }
    setText(feedback);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      text: Text,
      rating: rating,
    };
    if (EditFeedBack.editable) {
      const edited = {
        text: Text,
        rating: rating,
      };
      Edit(EditFeedBack.item.id,edited);
    } else {
      HandleCreate(data);
    }
  };

  return (
    <Card>
      <Rating select={(rating) => setRating(rating)} />
      <h4 className="text text-center">What's your feedback ?</h4>
      <h4>
        Rate : {rating}
      </h4>
      <form onSubmit={SubmitHandler}>
        <div className="container d-flex justify-content-center input-group">
          <input
            placeholder="feedback ..."
            value={Text}
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
