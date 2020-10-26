import React from "react";
import "./filter.css";

function Filter({ title, filterCollection, onFilterChange }) {
  function onButtonClick(value) {
    onFilterChange(value);
  }
  return (
    <div className="filter-container">
      <div className="subheading">{title}</div>
      <div className="underline" />
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
  );
}

export default Filter;
