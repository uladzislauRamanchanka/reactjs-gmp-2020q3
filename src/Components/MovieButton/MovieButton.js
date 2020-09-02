import React from 'react'
import containerStyles from '../ItemImage/ItemImage.module.css'
import MovieButtonLink from '../../images/buttonSvg.svg'

const MovieButton = props => <><img src={MovieButtonLink} className={containerStyles.MovieButton} onClick={props.CloseWindow}/></>

export default MovieButton