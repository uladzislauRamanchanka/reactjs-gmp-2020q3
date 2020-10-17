import React, { useState, useEffect } from "react";
import classes from "./ImageContainer.module.css";
import ItemImage from "../../Components/ItemImage/ItemImage";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/movieActions/actions";
import { selectSearchParams } from '../../store/movieActions/selector'

const ImageContainer = (props) => {
  const dispatch = useDispatch();
  const queryParams = useSelector(selectSearchParams);

  useEffect(() => {
    dispatch(fetchMovies(queryParams));
  }, []);
  const movies = useSelector((state) => state.movie.data);
  return (
    <div className={classes.ImageContainer}>
      {movies.map((item) => {
        return (
          <ItemImage movie={item} key={item.id} editItem={props.editItem} />
        );
      })}
    </div>
  );
};

export default React.memo(ImageContainer);
