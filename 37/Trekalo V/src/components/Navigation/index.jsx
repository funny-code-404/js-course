import React from "react";
import { Logo, Nav, Search } from "./components";
import "./styles.css";

export function Navigation(props) {
  return (
    <div className="navigation">
      <Logo title="Your Logo" />
      <Nav />
      <Search title="Search" />
    </div>
  );
}
