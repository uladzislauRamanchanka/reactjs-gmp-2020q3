import React from 'react'
import classes from './AddMovieButton.module.css'

const AddMovieButton = props => {
    return (
        <div>
            <div className={classes.AddMovieButton}><span className={classes.ButtonText}>+ ADD MOVIE</span></div>
        </div>
    )
}

export default AddMovieButton