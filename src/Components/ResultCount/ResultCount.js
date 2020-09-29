import React from 'react'
import classes from './ResultCount.module.css'
import {useSelector} from 'react-redux'
const ResultCount = props => {
    const amount = useSelector(state => state.movie.amount)
    return(
        <>
        <span className={classes.CountName}>{amount} </span><span>movies found</span>
        </>
    )
}

export default ResultCount