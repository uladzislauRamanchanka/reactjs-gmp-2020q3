import React, { useState, useEffect } from 'react'
import classes from './ItemImage.module.css'
import MovieButton from '../MovieButton/MovieButton'
import ItemTitle from '../ItemTitle/ItemTitle'
import ItemReleaseDate from '../ItemReleaseDate/ItemReleaseDate'
import ItemGenre from '../ItemGenre/ItemGenre'
import PropTypes from 'prop-types';
import MovieButtonWindow from '../MovieButton/MovieButtonWindow/MovieButtonWindow'
import ModalWindowWrapper from '../../ModalWindow/ModalWIndowWrapper/ModalWindowWrapper'
import ItemWindowOnEdit from './ItemWindow/ItemWindowOnEdit'
import ItemWindowOnDelete from './ItemWindow/ItemWindowOnDelete'

function useLogger(value) {
    useEffect(() => {
        console.log(`Value to log ${value}`)
    }, [value])
}

const ItemImage = props => {
    const [showModel, setShowModel] = useState(false);
    const [showModelWindowWrapper, setShowModelWindowWrapper] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [onDelete, setOnDelete] = useState(false);

function handleClickCLose() {
        setShowModel(!showModel)
}

function openWrapperEdit() {
    setShowModelWindowWrapper(!showModelWindowWrapper);
    setOnEdit(!onEdit);

    if (showModelWindowWrapper) {
        setShowModel(false);
        setOnEdit(false);
    }
}

function openWrapperDelete() {
    setShowModelWindowWrapper(!showModelWindowWrapper);
    setOnDelete(!onDelete);

    if (showModelWindowWrapper) {
        setShowModel(false);
        setOnDelete(false);
    }
     }

     return (
        <div className={classes.ItemWrapper}>
        <div className={classes.ImageWrapper}>
            <img src={props.url} className={classes.ItemImage} onClick={props.editItem}/>
            <MovieButton CloseWindow={handleClickCLose}/>
            {showModel && 
            <MovieButtonWindow 
            CloseWindow={handleClickCLose}
            EditWindow={openWrapperEdit}
            DeleteWindow={openWrapperDelete}
            />}
        <div className={classes.HeaderDescription}>
            <ItemTitle name={props.name}/>
            <ItemReleaseDate year={props.year}/>
        </div>
        <ItemGenre genre={props.genre}/>
    </div>
                {showModelWindowWrapper && onEdit &&
                <ModalWindowWrapper
                isEditButton
                onCloseRequest={openWrapperEdit}
                children={<ItemWindowOnEdit 
                title='EDIT MOVIE'
                />
            }
                />}

                {showModelWindowWrapper && onDelete &&
                <ModalWindowWrapper
                onCloseRequest={openWrapperDelete}
                children={<ItemWindowOnDelete
                title='DELETE MOVIE'
                />}
                />}
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