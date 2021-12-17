import "./styles.css";
import React from "react";

export function Button(props) {
  // console.log(props);
  return (
    <div>
      <button className="btn">{props.text}</button>
    </div>
  );
}
