import React from 'react'
import classes from './MainContent.module.css'
import FilterForm from '../FilterForm/FilterForm'
import CountContainer from '../CountContainer/CountContainer'
import ImageContainer from '../ImageContainer/ImageContainer'

const MainContent = props => {
    return (
        <div className={classes.wrapper}>
            <FilterForm/>
            <CountContainer/>
            <ImageContainer editItem={props.editItem}/>
        </div>
    )
}
export default MainContent