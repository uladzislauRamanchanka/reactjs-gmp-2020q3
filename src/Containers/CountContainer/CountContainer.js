import React from 'react'
import classes from './CountContainer.module.css'
import ResultCount from '../../Components/ResultCount/ResultCount';

const CountContainer = props => {
    const count = 6;
    return (
        <div className={classes.CountContainer}>
            <ResultCount name={count}/>
        </div>
    )
}

export default CountContainer