import React from 'react'
import styled, { css } from 'styled-components'
import closeButton from '../../../images/closeButton.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 80px;
    background-color: #555555;
    position: absolute;
    border-radius: 5px;
    right: 5px;
    top: 5px;
    z-index: 1;
    &:hover {
}
` 

const Button = styled.div`
    font-size: 20px;
    color: #fff;
    padding: 3px;
    cursor: pointer;
    &:hover {
    background-color: #F65261
}
`

const Cross = styled.img.attrs({
    src: closeButton
})`
    align-self: flex-end;
    height: 20px;
    cursor: pointer;
`

const MovieButtonWindow = props => {
    return (
        <Wrapper>
            <Cross onClick={props.CloseWindow}></Cross>
            <Button onClick={props.EditWindow}>Edit</Button>
            <Button onClick={props.DeleteWindow}>Delete</Button>
        </Wrapper>
    )
}

export default MovieButtonWindow