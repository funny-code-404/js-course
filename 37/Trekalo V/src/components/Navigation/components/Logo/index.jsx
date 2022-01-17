import React from "react";
import "./styles.css";

export function Logo({ title }) {
  return (
    <div>
      <p className="logo">{title}</p>
    </div>
  );
}
