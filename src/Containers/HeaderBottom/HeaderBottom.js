import React from 'react'
import classes from './HeaderBottom.module.css'
import Search from '../../Components/Search/Search'
import SearchButton from '../../Components/SearchButton/SearchButton'


const HeaderBottom = props => {
    return (
        <div className={classes.headerBottom}>
            <div className={classes.titleForm}>
                <h1>FIND YOUR MOVIE</h1>
            </div>
            <div className={classes.formContainer}>
            <Search/>
            <SearchButton/>
            </div>
            
        </div>
    )
}

export default HeaderBottom