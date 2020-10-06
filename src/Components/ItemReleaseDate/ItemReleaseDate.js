import React from "react";
import classes from "./ItemReleaseDate.module.css";

const ItemReleaseDate = (props) => (
  <div className={classes.ItemReleaseDate}>{props.year}</div>
);

export default ItemReleaseDate;
