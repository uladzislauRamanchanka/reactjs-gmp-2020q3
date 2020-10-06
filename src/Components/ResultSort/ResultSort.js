import React from "react";
import classes from "./ResultSort.module.css";

const ResultSort = (props) => {
  return (
    <>
      <span className={classes.Sort}>SORT BY</span>
      <span className={classes.Release}>RELEASE DATE</span>
      <span className={classes.arrow}></span>
    </>
  );
};

export default ResultSort;
