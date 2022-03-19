import React, { Component } from "react";
import instagram from "./Images/instagram.png";
import facebook from "./Images/facebook.png";
import link from "./Images/link.png";
import pinterest from "./Images/pinterest.png";
import styles from "./styles.css";

class Socials extends Component {
  render() {
    return (
      <div className="socialsWrapper">
        <img src={instagram} />
        <img src={facebook} />
        <img src={link} />
        <img src={pinterest} />
      </div>
    );
  }
}

export default Socials;
