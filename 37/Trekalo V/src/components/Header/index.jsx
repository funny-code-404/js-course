import React from "react";
import { Button, Title } from "./components";
import "./styles.css";

export function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <Title
          classes={{
            block: "header_title",
            first: "first_title",
            second: "second_title",
          }}
        />
        <div className="header_buttons">
          <Button text="HIRE IS NOW" />
        </div>
      </div>
    </div>
  );
}
