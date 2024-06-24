import React, { useEffect, useState } from "react";
import { Options } from "./components/Option";
import { Information } from "./components/Information";
import "./styles.css";

export function App(props) {
  const [data, setData] = useState([]);
  // pagination
  const [arrWithPaginationIndexies, setArrWithPaginationIndexies] = useState(1);
  //
  const [horsePower, setHorsePower] = useState(false);
  const [price, setPrice] = useState(false);
  const [carId, setCarId] = useState(false);
  const [model, setModel] = useState(false);

  const [textFilter, setTextFilter] = useState("");
  // fetch url
  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch(
        "https://private-anon-ab94b87860-carsapi1.apiary-mock.com/manufacturers"
      ).then((response) => response.json());
      setData(response);
    };
    fetchCars();
  }, []);
  // sort

  const sortData = (isIncreasing, carsFeaturesKeys) => {
    const resultArr = [...data];
    setData(
      resultArr.sort((a, b) =>
        isIncreasing
          ? a[carsFeaturesKeys] - b[carsFeaturesKeys]
          : b[carsFeaturesKeys] - a[carsFeaturesKeys]
      )
    );
  };
  //

  function paginationMaker() {
    const arrPage = [];
    const firstIndex = arrWithPaginationIndexies * 10 - 10;
    const secondIndex = arrWithPaginationIndexies * 10 - 1;
    data.forEach((item, index) => {
      if (index >= firstIndex && index <= secondIndex) {
        arrPage.push(item);
      }
    });
    return arrPage;
  }

  return (
    <div className="wrapper">
      <Information
        data={paginationMaker(arrWithPaginationIndexies)}
        hooks={{ horsePower, price, carId, model, textFilter }}
        sortData={sortData}
      />
      <Options
        tools={{
          setHorsePower,
          setPrice,
          setCarId,
          setModel,
          setTextFilter,
          setArrWithPaginationIndexies,
        }}
        hooks={{
          horsePower,
          price,
          carId,
          model,
          textFilter,
          arrWithPaginationIndexies,
        }}
      />
    </div>
  );
}
