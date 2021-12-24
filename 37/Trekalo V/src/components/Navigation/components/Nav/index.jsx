import React from "react";
import { navItems } from "../Search/constants";
import "./styles.css";

function NavItemMaker() {
  return navItems.map((item) => (
    <div key={item.id} className="nav_item">
      {item.name}
    </div>
  ));
}

export function Nav() {
  return (
    <div className="nav">
      <NavItemMaker />
    </div>
  );
}
