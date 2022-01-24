import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Header = () => {
  return (
    <div className="container d-flex justify-content-center">
      <h1 style={styles}>FeedBack App </h1>

      <NavLink to="/Feedback/About">❔</NavLink>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        className="toast-success-container toast-success-container-after"
        toastClassName="dark-toast"
      />
    </div>
  );
};

const styles = {
  color: "#FF00FF",
  textShadow: "2px 2px #ff0000",
};

export default Header;
