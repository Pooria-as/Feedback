import React from "react";

const Card = ({ children,DarkMode }) => {
    
  return (
    <div className="container">
      <div className={DarkMode ? 'card reverse' : 'card'}>{children}</div>
    </div>
  );
};

export default Card;
