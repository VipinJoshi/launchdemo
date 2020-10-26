import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import "./filter.css";

function Filters({ onFilter }) {
  const yearList = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];
  const successfulLaunch = ["True", "False"];
  const successfulLanding = ["True", "False"];

  const [yearFilter, setYearFilter] = useState("");
  const [succesLaunchFilter, setSuccesLaunchFilter] = useState("");
  const [succesLandFilter, setSuccesLandFilter] = useState("");

  function onFilterChange(callFor, value) {
    switch (callFor) {
      case "launch_year":
        setYearFilter(`&${callFor}=${value}`);
        break;
      case "launch_success":
        setSuccesLaunchFilter(`&${callFor}=${value.toLowerCase()}`);
        break;
      case "land_success":
        setSuccesLandFilter(`&${callFor}=${value.toLowerCase()}`);
        break;
      default:
        null;
        break;
    }
  }

  useEffect(() => {
    let filterString = `${yearFilter}${succesLaunchFilter}${succesLandFilter}`;
    onFilter(filterString);
  }, [yearFilter, succesLaunchFilter, succesLandFilter]);

  return (
    <div className="filter-item">
      <div className="container">
        <div className="heading"> Filters </div>
        
        <Filter
          title="Launch Year"
          callFor="launch_year"
          filterCollection={yearList}
          onFilterChange={value => onFilterChange("launch_year", value)}
        />
        <Filter
          callFor="launch_success"
          title="Successful Year"
          filterCollection={successfulLaunch}
          onFilterChange={value => onFilterChange("launch_success", value)}
        />
        <Filter
          callFor="land_success"
          title="Successful Landing"
          filterCollection={successfulLanding}
          onFilterChange={value => onFilterChange("land_success", value)}
        />
      </div>
    </div>
  );
}

export default Filters;
