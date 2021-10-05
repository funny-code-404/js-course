import React from "react";

import "./navigation.css";

import { breedNames } from "./breed-names.config";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          {breedNames.map((breed) => (
            <li
              key={breed.id}
              className="menu__list-item"
              onClick={this.props.handleClick}
            >
              <button
                className="menu__button menu__button--active"
                name={breed.name}
              >
                {breed.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
