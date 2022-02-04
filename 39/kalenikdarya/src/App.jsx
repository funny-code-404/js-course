import "./App.css";
import { useEffect, useState } from "react";
import NavigationItems from "./components/Navigation";
import Image from "./components/Image";
import DOGS from "./constants/index";
import {getRandomDog} from "./api"
import axios from "axios";

export function App() {
  const [value, setValue] = useState({ value: [] });

  useEffect(async () => {
    const result = await getRandomDog()
    setValue(result.data.message);
  }, []);



  const updateData = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <div className="navigation-wrapper">
        <ul className="dogs-list">
          <NavigationItems
            breeds={DOGS}
            updateData={updateData}
          />
        </ul>
      </div>
      <div>
        <Image src={value} />
      </div>
    </div>
  );
}
