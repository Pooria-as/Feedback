import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="Feedback" element={<Home />} />
        <Route path="/Feedback/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
