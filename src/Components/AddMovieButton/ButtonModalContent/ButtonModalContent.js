import React, { useState } from "react";
import styled from "styled-components";
import { genres } from "../../../constants/const";
import Selector from "../../../Selector/Selector";
import { useDispatch } from "react-redux";
import { createMovie } from "../../../store/movieActions/actions";
import AddFormContainer from '../../Formik/AddFormContainer'

const TitleWindow = styled.span`
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
`;
const TitleInput = styled.span`
  font-size: 15px;
  color: #f65261;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputWindow = styled.input`
  width: 98%;
  padding: 1%;
  background-color: #555555;
  opacity: 0.8;
  border: #555555;
  border-radius: 5px;
  font-size: 15px;
  min-height: 35px;
`;

const ModalFooter = styled.div`
  padding: 20px;
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

const FooterButton = styled.div`
  background-color: #f65261;
  border-radius: 2px;
  padding: 10px 55px;
  margin-right: 10px;
  cursor: pointer;
`;

const InputDate = styled(InputWindow).attrs({
  type: "date",
})``;

const ButtonModalContent = (props) => {
  const [inputData, setInputData] = useState({
    tagline: "Example",
    vote_average: 0,
    vote_count: 1,
    release_date: "",
    poster_path: "",
    overview: "Long Story",
    budget: 5555,
    revenue: 5555,
    genres: [],
    runtime: 100,
    title: "Movie",
  });
  const dispatch = useDispatch();

  const handleChange = (event) =>
    setInputData({
      ...inputData,
      genres: Array.from(event.target.selectedOptions).map(
        (option) => option.value
      ),
    });

  return (
    <>
      <TitleWindow>{props.title}</TitleWindow>
      <AddFormContainer cancelEvent={props.onCloseRequest}/>
      {/* <TitleInput>TITLE</TitleInput>
      <InputWindow
        onChange={(event) =>
          setInputData({ ...inputData, title: event.target.value })
        }
      ></InputWindow>
      <TitleInput>RELEASE DATE</TitleInput>
      <InputDate
        onChange={(event) =>
          setInputData({ ...inputData, release_date: event.target.value })
        }
      ></InputDate>
      <TitleInput>MOVIE URL</TitleInput>
      <InputWindow
        onChange={(event) =>
          setInputData({ ...inputData, poster_path: event.target.value })
        }
      ></InputWindow>
      <TitleInput>GENRE</TitleInput>
      <Selector values={genres} onChange={handleChange}></Selector>
      <TitleInput>OVERVIEW</TitleInput>
      <InputWindow
        onChange={(event) =>
          setInputData({ ...inputData, overview: event.target.value })
        }
      ></InputWindow>
      <TitleInput>RUNTIME</TitleInput>
      <InputWindow
        onChange={(event) =>
          setInputData({ ...inputData, runtime: +event.target.value })
        }
      ></InputWindow>
      <ModalFooter>
        <FooterButton onClick={props.onCloseRequest}>RESET</FooterButton>
        <FooterButton
          onClick={() => {
            const closeWindow = props.onCloseRequest;
            dispatch(createMovie(inputData));
            closeWindow();
          }}
        >
          SUBMIT
        </FooterButton>
      </ModalFooter> */}
    </>
  );
};

export default ButtonModalContent;
