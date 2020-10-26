import React from "react";
import "./filter.css";

function Filter({ title, filterCollection, onFilterChange }) {
  function onButtonClick(value) {
    onFilterChange(value);
  }
  return (
    <>
      <div className="subheading">{title}</div>
      <div className="underline" />
      <div className="filter-container">
        {filterCollection.map(item => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick(item)}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Filter;
