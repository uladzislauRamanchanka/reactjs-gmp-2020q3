import React from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.inputSearch}
        placeholder="What do you want to watch"
      />
    </div>
  );
};

export default Search;
