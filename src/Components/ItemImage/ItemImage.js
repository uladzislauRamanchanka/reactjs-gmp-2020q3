import React from 'react'
import classes from './ItemImage.module.css'
import MovieButton from '../MovieButton/MovieButton'
import ItemTitle from '../ItemTitle/ItemTitle'
import ItemReleaseDate from '../ItemReleaseDate/ItemReleaseDate'
import ItemGenre from '../ItemGenre/ItemGenre'
import PropTypes from 'prop-types';

const ItemImage = props => {
    const image = props.url;
    return (
        <div className={classes.ItemWrapper}>
            <div className={classes.ImageWrapper}>
                <img src={image} className={classes.ItemImage}/>
                <MovieButton/>
                <div className={classes.HeaderDescription}>
                    <ItemTitle name={props.name}/>
                    <ItemReleaseDate year={props.year}/>
                </div>
                <ItemGenre genre={props.genre}/>
            </div>
        </div>
    )
}

ItemImage.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
}

export default ItemImage