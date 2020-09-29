import React, { useState, useEffect } from 'react'
import classes from './ImageContainer.module.css'
import ItemImage from '../../Components/ItemImage/ItemImage'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMovies} from '../../store/movieActions/actions'

const ImageContainer = props => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])
    const movies = useSelector(state => state.movie.data)
    return (
        <div className={classes.ImageContainer}>
            {movies.map(item => {
                return (
                <ItemImage
                movie={item}
                key={item.id}
                editItem={props.editItem}
                />
                )
                
            })}    
        </div>
    )
}

export default ImageContainer