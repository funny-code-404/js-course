import React, { useEffect, useState } from "react";
import { InfoTitle } from "./components/InfoTitle";
import "./styles.css";

export function Information({ data, hooks, sortData }) {
  return (
    <div className="information">
      <div className="title">
        <div className="title_item car_brand">Brand</div>
        <InfoTitle hooks={hooks} sortData={sortData} />
      </div>
      <InfoText data={data} hooks={hooks} />
    </div>
  );
}

function InfoText({ data, hooks }) {
  //TODO:func name
  const { horsePower, price, carId, model, textFilter } = hooks;
  return data.map(
    ({ avg_horsepower, avg_price, max_car_id, name, num_models, id }) => {
      if (name.indexOf(textFilter) === -1) {
        return;
      }

      return (
        <div className="contant" key={id}>
          <div className="contant_item">
            {name.slice(0, 1).toUpperCase() + name.slice(1)}
          </div>
          {!horsePower && (
            <div className="contant_item">{Math.floor(avg_horsepower)} hp</div>
          )}
          {!price && (
            <div className="contant_item">{Math.floor(avg_price)} $</div>
          )}
          {!carId && <div className="contant_item">{max_car_id}</div>}
          {!model && <div className="contant_item">{num_models}</div>}
        </div>
      );
    }
  );
}
