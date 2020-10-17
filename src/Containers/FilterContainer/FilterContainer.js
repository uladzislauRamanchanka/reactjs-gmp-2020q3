import React, { useState } from "react";
import classes from "./FilterContainer.module.css";
import FilterItem from "../../Components/FilterItem/FilterItem";
import { useDispatch } from "react-redux";
import { filterByGenre } from "../../store/movieActions/actions";

const FilterContainer = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const genres = {
    filterItemNames: [
      { name: "ALL", active: true },
      { name: "ROMANCE", active: false },
      { name: "COMEDY", active: false },
      { name: "HORROR", active: false },
      { name: "CRIME", active: false },
      { name: "DRAMA", active: false },
    ],
  };
  const dispatch = useDispatch();
  const handleGenre = (index, genre) => {
    setActiveTab(index);
    dispatch(filterByGenre(genre));
  };
  return (
    <div className={classes.FilterContainer}>
      {genres.filterItemNames.map((item, index) => (
        <FilterItem
          name={item.name}
          key={index}
          isActive={index === activeTab ? "Active" : ""}
          setActive={() => handleGenre(index, item.name)}
        />
      ))}
    </div>
  );
};

export default FilterContainer;
