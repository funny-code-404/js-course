import React from "react";
import { SortButtons } from "./components/SortButtons";

export function InfoTitle({ hooks, sortData }) {
  const { horsePower, price, carId, model } = hooks;

  return (
    <React.Fragment>
      {!horsePower && (
        <Title property="avg_horsepower" sortData={sortData} title="HPower" />
      )}
      {!price && (
        <Title property="avg_price" sortData={sortData} title="Price" />
      )}
      {!carId && (
        <Title property="max_car_id" sortData={sortData} title="Car ID" />
      )}
      {!model && (
        <Title property="num_models" sortData={sortData} title="Model" />
      )}
    </React.Fragment>
  );
}

function Title({ title, sortData, property }) {
  return (
    <div className="title_item">
      {title}
      <SortButtons property={property} sortData={sortData} />
    </div>
  );
}
