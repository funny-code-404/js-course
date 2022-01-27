import React from "react";
import "./styles.css";

export function Button(props) {
  return (
    <div>
      <button className="btn">{props.text}</button>
    </div>
  );
}
