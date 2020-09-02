import React from 'react'
import styled from 'styled-components'

const TitleWindow = styled.span`
    font-size: 30px;
    color: #fff;
    margin-bottom: 30px;
`
const Content = styled.h3`
    color: #fff;
`

const ItemWindowOnDelete = props => {
    return (
        <>
        <TitleWindow>{props.title}</TitleWindow>
        <Content>Are you sure you want to delete this item?</Content>
        </>
    )
}

export default ItemWindowOnDelete