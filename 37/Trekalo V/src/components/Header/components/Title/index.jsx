import "./styles.css";
import React from "react";

export const Title = ({ classes }) => {
  console.log(classes);
  return (
    <div className={classes.block}>
      <h1 className={classes.first}>Web development project</h1>
      <p className={classes.second}>
        Very suitable to support all web development projects
      </p>
    </div>
  );
};
