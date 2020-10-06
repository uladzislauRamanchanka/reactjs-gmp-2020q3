import React from "react";
import classes from "./FilterItem.module.css";
import PropTypes from "prop-types";

const FilterItem = (props) => {
  return (
    <div className={classes.FilterItem}>
      <a href="#" className={classes.Link}>
        {props.name}
      </a>
      <hr className={props.isActive ? classes.dividerRed : classes.divider} />
    </div>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FilterItem;
