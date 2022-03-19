import React from "react";
import { Search } from "./components/Search";
import { ShowHideColumn } from "./components/ShowHide";
import { PaginationPages } from "./components/PaginationPages";
import "./styles.css";

export function Options({ tools, hooks }) {
  const {
    setHorsePower,
    setPrice,
    setCarId,
    setModel,
    setTextFilter,
    setArrWithPaginationIndexies,
  } = tools;
  const {
    horsePower,
    price,
    carId,
    model,
    textFilter,
    arrWithPaginationIndexies,
  } = hooks;

  return (
    <form className="options">
      <ShowHideColumn
        onChange={setHorsePower}
        hook={horsePower}
        title='Show/hide "Horsepower" column'
      />
      <ShowHideColumn
        onChange={setPrice}
        hook={price}
        title='Show/hide "Price" column'
      />
      <ShowHideColumn
        onChange={setCarId}
        hook={carId}
        title='Show/hide "Car ID" column'
      />
      <ShowHideColumn
        onChange={setModel}
        hook={model}
        title='Show/hide "Model" column'
      />
      <Search placeholder="Search" hook={textFilter} onChange={setTextFilter} />
      <PaginationPages
        onClick={setArrWithPaginationIndexies}
        arrWithPaginationIndexies={arrWithPaginationIndexies}
      />
    </form>
  );
}
