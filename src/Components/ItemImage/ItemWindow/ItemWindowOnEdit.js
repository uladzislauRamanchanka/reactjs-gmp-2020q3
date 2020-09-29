import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {updateMovie} from '../../../store/movieActions/actions'
import Selector from '../../../Selector/Selector'
import { genres } from '../../../constants/const'

const TitleWindow = styled.span`
    font-size: 30px;
    color: #fff;
    margin-bottom: 30px;
`
const TitleInput = styled.span`
    font-size: 15px;
    color: #f65261;
    margin-top: 10px;
    margin-bottom: 10px;
`

const InputWindow = styled.input.attrs({
    type: 'text'
})`
    width: 98%;
    padding: 1%;
    background-color: #555555;
    opacity: 0.8;
    border: #555555;
    border-radius: 5px;
    font-size: 15px;
    min-height: 35px;
`

const InputDate = styled(InputWindow).attrs({
    type: 'date'
})``

const ModalFooter = styled.div`
    padding: 20px;
    display: flex;
    margin: 10px;
    justify-content: flex-end;
`

const FooterButton = styled.div`
    background-color: #F65261;
    border-radius: 2px;
    padding: 10px 55px;
    margin-right: 10px;
    cursor: pointer;
`


const ItemWindowOnEdit = props => {
    const [inputData, setInputData] = useState({
        tagline: props.movie.tagline,
        vote_average: props.movie.vote_average,
        vote_count: props.movie.vote_count,
        release_date: props.movie.release_date,
        poster_path: props.movie.poster_path,
        overview: props.movie.overview,
        budget: props.movie.budget,
        revenue: props.movie.revenue,
        genres: props.movie.genres,
        runtime: props.movie.runtime,
        title: props.movie.title,
        id: props.movie.id
    });
    const dispatch = useDispatch()
    return (
        <>
        <TitleWindow>{props.title}</TitleWindow>
        <TitleInput>MOVIE ID</TitleInput>
        <InputWindow defaultValue={props.movie.id} readOnly={true}></InputWindow>
        <TitleInput>TITLE</TitleInput>
        <InputWindow defaultValue={props.movie.title} onChange={event => setInputData({...inputData, title: event.target.value})}></InputWindow>
        <TitleInput>RELEASE DATE</TitleInput>
        <InputDate defaultValue={props.movie.release_date} onChange={event => setInputData({...inputData, release_date: event.target.value})}></InputDate>
        <TitleInput>MOVIE URL</TitleInput>
        <InputWindow defaultValue={props.movie.poster_path} onChange={event => setInputData({...inputData, poster_path: event.target.value})}></InputWindow>
        <TitleInput>Genres</TitleInput>
        <Selector values={genres} onChange={event => setInputData({...inputData, genres: Array.from(event.target.selectedOptions).map(option => option.value)})}></Selector>
        <TitleInput>OVERVIEW</TitleInput>
        <InputWindow defaultValue={props.movie.overview} onChange={event => setInputData({...inputData, overview: event.target.value})}></InputWindow>
        <TitleInput>RUNTIME</TitleInput>
        <InputWindow defaultValue={props.movie.runtime} onChange={event => setInputData({...inputData, runtime: +event.target.value})}></InputWindow>
        <ModalFooter>
            <FooterButton onClick={props.onCloseRequest}>CANCEL</FooterButton>
            <FooterButton onClick={() => {
                dispatch(updateMovie(inputData))
                const closeWindow = props.onCloseRequest
                closeWindow()
                }}>SUBMIT</FooterButton>
        </ModalFooter>
        </>
    )
}

export default ItemWindowOnEdit