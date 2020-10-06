import React, { Component } from "react";
import classes from "./FilterContainer.module.css";
import FilterItem from "../../Components/FilterItem/FilterItem";

const FilterContainer = (props) => {
  const genres = {
    filterItemNames: [
      { name: "ALL", active: true },
      { name: "DOCUMENTARY", active: false },
      { name: "COMEDY", active: false },
      { name: "HORROR", active: false },
      { name: "CRIME", active: false },
    ],
  };
  return (
    <div className={classes.FilterContainer}>
      {genres.filterItemNames.map((item, index) => (
        <FilterItem name={item.name} key={index} isActive={item.active} />
      ))}
    </div>
  );
};

export default FilterContainer;
