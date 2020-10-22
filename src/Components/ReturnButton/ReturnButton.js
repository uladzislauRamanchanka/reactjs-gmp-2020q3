import React from "react";
import styled from "styled-components";
import searchButton from "../../images/searchButton.svg";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom'
import { formLink } from "../../store/utils";

const SearchButton = styled.img`
  height: 20px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px 10px;
  cursor: pointer;
`;

const ReturnButton = (props) => {
  const searchParams = useSelector((state) => state.movie.searchParams)
  const query = formLink(searchParams)
  const history = useHistory()
  const location = useLocation()
  const handleClick = () => {
    history.push({
      pathname: '/search',
      search: `${query}`
    })
  }
  return (
    <>
      <SearchButton
        src={searchButton}
        onClick={handleClick}
      ></SearchButton>
    </>
  );
};

export default ReturnButton;
