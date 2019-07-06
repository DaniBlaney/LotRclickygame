import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <div className="NavBar row">
     {
       
     }
      <div className="score col-md">Score: {props.score}</div>
      <div className="score col-md">Message: {props.message}</div>
      <div className="score col-md">Top Score: {props.topScore}</div>
    </div>
  );
};

export default NavBar;
