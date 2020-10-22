import React, { useState } from "react";
import classes from "./FilterContainer.module.css";
import FilterItem from "../../Components/FilterItem/FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre } from "../../store/movieActions/actions";
import { useLocation, useHistory, useParams } from 'react-router-dom'
import { formLink } from '../../store/utils'

const FilterContainer = (props) => {
  const { id } = useParams()
  const genres = {
    filterItemNames: [
      { name: "ALL"},
      { name: "ROMANCE"},
      { name: "COMEDY"},
      { name: "HORROR"},
      { name: "CRIME"},
      { name: "DRAMA"},
    ],
  };
  const location = useLocation()
  const url = new URLSearchParams(location.search)
  const firstTab = url.get('filter') ? url.get('filter') : 'ALL'
  const indexTab = genres.filterItemNames.findIndex(item => item.name === firstTab.toUpperCase())
  const [activeTab, setActiveTab] = useState(indexTab);

  const searchParams = useSelector(state => state.movie.searchParams)
  const history = useHistory()
  const dispatch = useDispatch();
  const handleGenre = (index, genre) => {
    setActiveTab(index);
    dispatch(filterByGenre(genre));
    if (!id)
    history.push({
      pathname: '/search',
      search: formLink(searchParams, genre)
    })
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
