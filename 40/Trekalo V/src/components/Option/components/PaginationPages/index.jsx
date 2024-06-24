import React from "react";
import "./styles.css";

export function PaginationPages({ onClick, arrWithPaginationIndexies }) {
  function prevPageHandler() {
    if (arrWithPaginationIndexies === 1) return;

    return () => {
      onClick(arrWithPaginationIndexies - 1);
    };
  }
  function nextPageHandler() {
    if (arrWithPaginationIndexies === 4) return;

    return () => {
      onClick(arrWithPaginationIndexies + 1);
    };
  }
  return (
    <div className="pagination_main">
      <div className="prev_page" onClick={prevPageHandler()}></div>
      <div className="pagination_items" onClick={() => onClick(1)}>
        1
      </div>
      <div className="pagination_items current_page">
        {arrWithPaginationIndexies}
      </div>
      <div className="pagination_items" onClick={() => onClick(4)}>
        4
      </div>
      <div className="next_page" onClick={nextPageHandler()}></div>
    </div>
  );
}
