import React from "react";
import { useState } from "react";
import "./style.css";

const dogsArr = [
  {
    name: "Akita",
    id: "akita",
  },
  {
    name: "Chow",
    id: "chow",
  },
  {
    name: "Boxer",
    id: "boxer",
  },
  {
    name: "Husky",
    id: "husky",
  },
  {
    name: "Mix",
    id: "mix",
  },
];

export function Navigation() {
  const [source, setSource] = useState("");

  const addImage = async (dog) => {
    const { message: image } = await fetch(
      `https://dog.ceo/api/breed/${dog}/images/random`
    ).then((data) => data.json());

    setSource(image);
  };
  const closerToNav = () => {
    //TODO:
    return NavItemMaker(dogsArr, addImage);
  };

  return (
    <div>
      <div className="wrapper"> {closerToNav()}</div>
      {!source && <p className="title">Click and dog will load</p>}
      {source && <img className="image" src={source} alt="" />}
    </div>
  );
}

const NavItemMaker = (arr, func) => {
  return arr.map((dog) => (
    <div className="dogs" key={dog.id} onClick={() => func(dog.id)}>
      {dog.name}
    </div>
  ));
};
