import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import axios from "axios";
import { FEEDBACKS } from "../Utilities/Url";

export const FeedbackContext = React.createContext();

const FeedBackProvider = ({ children }) => {
  const [FeedBack, setFeedBack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [EditFeedBack, setEditFeedBack] = useState({
    item: {},
    editable: false,
  });

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true)
      const data = await axios.get(FEEDBACKS);
      setFeedBack(data.data);
      setLoading(false)
    };
    FetchData();
  }, []);

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
        axios.delete(FEEDBACKS + `/${id}`);
        swal("Poof! Your FeedBack file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const HandleCreate = (data) => {
    axios.post(FEEDBACKS, data);
    setFeedBack([data, ...FeedBack]);
    toast("success ✔");
  };

  const Edit = (id, updateDATA) => {
    setFeedBack(
      FeedBack.map((item) =>
        item.id === id ? { ...item, ...updateDATA } : item
      )
    );
    axios.put(FEEDBACKS + `/${id}`, updateDATA);
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
        loading,
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
