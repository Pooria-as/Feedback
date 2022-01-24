import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Shared/Card";

const About = () => {
  const data = new Date();
  let year = data.getFullYear();
  return (
    <div>
      <Card>
        <p>This is Feedback App</p>
        <h4>
          Created by Pooria Asiabi ✌✨
          {year}
        </h4>
        <br />
        <NavLink to="/Feedback" className="btn btn-primary">
          Back
        </NavLink>
      </Card>
    </div>
  );
};

export default About;

<h1></h1>;
