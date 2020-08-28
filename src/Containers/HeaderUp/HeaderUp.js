import React from 'react'
import classes from './HeaderUp.module.css'
import NetflixRoulette from '../../Components/NetflixRoulette/NetflixRoulette'
import AddMovieButton from '../../Components/AddMovieButton/AddMovieButton'

const HeaderUp = props => {
    return (
        <div className={classes.headerUp}>
            <NetflixRoulette/>
            <AddMovieButton/>
        </div>
    )
}

export default HeaderUp