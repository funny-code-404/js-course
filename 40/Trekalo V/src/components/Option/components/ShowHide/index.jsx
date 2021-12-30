import React from "react";
import { useState } from "react";
import "./styles.css";

export function ShowHideColumn({ title, onChange, hook }) {
  const changeHandler = () => {
    onChange(!hook);
  };
  return (
    <div className="show_hide_input">
      <input type="checkbox" value={hook} onChange={changeHandler} />
      <span>{title}</span>
    </div>
  );
}
