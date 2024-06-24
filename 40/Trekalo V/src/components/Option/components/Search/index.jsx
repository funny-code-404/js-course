import React from "react";
import { useState } from "react";
import "./styles.css";

export function Search({ placeholder, onChange, hook }) {
  const changeHandler = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="">
      <input
        type="text"
        placeholder={placeholder}
        value={hook}
        onChange={changeHandler}
      />
    </div>
  );
}
