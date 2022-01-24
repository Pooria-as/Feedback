import React, { useState } from "react";
import swal from "sweetalert";
import Header from "../components/Common/Header"
import Feeback from "../components/FeedBack/Feeback.jsx";
import FeedBackForm from "../components/FeedBack/FeedBackForm.jsx";
import FeedBackStatus from "../components/FeedBack/FeedBackStatus.jsx";
import { toast } from "react-toastify";
import DATA from "../data/FeedBackData";
const Home = () => {
  const [FeedBack, setFeedBack] = useState(DATA);

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

  return (
    <div>
      <Header />
      <FeedBackForm HandleCreate={HandleCreate} />
      <FeedBackStatus feebacks={FeedBack} />
      <Feeback feebacks={FeedBack} HandleDelete={HandleDelete} />
    </div>
  );
};

export default Home;
