import React from "react";
import "./style.css";

const Image = ({ image, name, onHandleShuffle, id }) => {
  return (
    <>
      <img src={image} alt={name} onClick={() => onHandleShuffle(id)}  className="LOTR"/>
    </>
  );
};

export default Image;
