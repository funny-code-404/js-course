import React from "react";

export function SortButtons({ sortData, property }) {
  const clickMakerDecrease = () => {
    sortData(true, property);
  };
  const clickMakerIncrease = () => {
    sortData(false, property);
  };
  return (
    <div>
      <button onClick={clickMakerDecrease}>increase</button>
      <button onClick={clickMakerIncrease}>decrease</button>
    </div>
  );
}
