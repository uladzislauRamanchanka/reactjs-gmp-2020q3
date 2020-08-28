import React from 'react'
import classes from './ResultCount.module.css'

const ResultCount = props => {
    return(
        <>
        <span className={classes.CountName}>{props.name} </span><span>movies found</span>
        </>
    )
}

export default ResultCount