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

function NavItemMaker(arr, func) {
  //TODO: в отдельный компонент
  arr.map((dog) => (
    <div key={dog.id} className="dogs" onClick={() => func(dog.id)}>
      {dog.name}
    </div>
  ));
}

export function Navigation() {
  const [source, setSource] = useState("");

  const addImage = async (dog) => {
    const { message: image } = await fetch(
      `https://dog.ceo/api/breed/${dog}/images/random`
    ).then((data) => data.json());

    setSource(image);
  };

  const CloserToNav = () => NavItemMaker(dogsArr, addImage); //TODO: плохое название функции

  return (
    <div>
      <div className="wrapper">
        <CloserToNav />
      </div>
      {!source && <p className="title">Click and dog will load</p>}
      {source && <img className="image" src={source} alt="" />}
    </div>
  );
}
