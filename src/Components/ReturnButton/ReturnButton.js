import React from "react";
import styled from "styled-components";
import searchButton from "../../images/searchButton.svg";

const SearchButton = styled.img`
  height: 20px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px 10px;
  cursor: pointer;
`;

const ReturnButton = (props) => {
  return (
    <>
      <SearchButton
        src={searchButton}
        onClick={props.returnBack}
      ></SearchButton>
    </>
  );
};

export default ReturnButton;
