import React from 'react'
import styled from 'styled-components'

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

const InputWindow = styled.input`
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

const ButtonModalContent = props => {
    return (
        <>
        <TitleWindow>{props.title}</TitleWindow>
        <TitleInput>TITLE</TitleInput>
        <InputWindow></InputWindow>
        <TitleInput>RELEASE DATE</TitleInput>
        <InputDate></InputDate>
        <TitleInput>MOVIE URL</TitleInput>
        <InputWindow></InputWindow>
        <TitleInput>OVERVIEW</TitleInput>
        <InputWindow></InputWindow>
        <TitleInput>RUNTIME</TitleInput>
        <InputWindow></InputWindow>
        </>
    )
}

export default ButtonModalContent