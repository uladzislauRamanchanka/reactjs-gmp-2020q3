import React, { useState } from "react";
import classes from "./Search.module.css";
import { useDispatch } from "react-redux";
import { searchByTitle } from "../../store/movieActions/actions";

const Search = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.inputSearch}
        placeholder="What do you want to watch"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div
        className={classes.SearchButton}
        onClick={() => {
          dispatch(searchByTitle(value));
          setValue("");
        }}
      >
        Search
      </div>
    </div>
  );
};

export default Search;
