import React, { useState } from "react";
import DATA from "../data/FeedBackData";
import { toast } from "react-toastify";
import swal from "sweetalert";

export const FeedbackContext = React.createContext();

const FeedBackProvider = ({ children }) => {
  const [FeedBack, setFeedBack] = useState(DATA);
  const [EditFeedBack, setEditFeedBack] = useState({
    item: {},
    editable: false,
  });
  const HandleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const filter = FeedBack.filter((item) => item.id !== id);
        setFeedBack(filter);
        swal("Poof! Your FeedBack file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const HandleCreate = (data) => {
    setFeedBack([data, ...DATA]);
    toast("success ✔");
  };

  const Edit = (id, updateDATA) => {
    setFeedBack(
      FeedBack.map((item) =>
        item.id === id ? { ...item, ...updateDATA } : item
      )
    );
    toast("Edited successfully ✔😎 ");
  };

  const HandleEdit = (item) => {
    setEditFeedBack({
      item: item,
      editable: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        EditFeedBack,
        FeedBack,
        HandleDelete,
        HandleCreate,
        HandleEdit,
        Edit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedBackProvider;
