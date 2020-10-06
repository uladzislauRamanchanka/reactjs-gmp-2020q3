import React from "react";
import classes from "./ItemTitle.module.css";

const ItemTitle = (props) => (
  <div className={classes.ItemTitle}>{props.name}</div>
);

export default ItemTitle;
