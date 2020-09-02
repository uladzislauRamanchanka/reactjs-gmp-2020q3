import React, { Component } from 'react'
import classes from './ItemImage.module.css'
import MovieButton from '../MovieButton/MovieButton'
import ItemTitle from '../ItemTitle/ItemTitle'
import ItemReleaseDate from '../ItemReleaseDate/ItemReleaseDate'
import ItemGenre from '../ItemGenre/ItemGenre'
import PropTypes from 'prop-types';
import MovieButtonWindow from '../MovieButton/MovieButtonWindow/MovieButtonWindow'
import ModalWindowWrapper from '../../ModalWindow/ModalWIndowWrapper/ModalWindowWrapper'
import ButtonModalContent from '../AddMovieButton/ButtonModalContent/ButtonModalContent'
import ItemWindowOnEdit from './ItemWindow/ItemWindowOnEdit'
import ItemWindowOnDelete from './ItemWindow/ItemWindowOnDelete'

class ItemImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModel: false,
            showModelWindowWrapper: false,
            onEdit: false,
            onDelete: false
        }
    }
    handleClickCLose() {
        this.setState({
            showModel: !this.state.showModel
        })
    }

    openWrapperEdit() {
        this.setState({
            showModelWindowWrapper: !this.state.showModelWindowWrapper,
            onEdit: !this.state.onEdit
        })
        if (this.state.showModelWindowWrapper) {
            this.setState({
                showModel: false,
                onEdit: false
            })
        }
    }

    openWrapperDelete() {
        this.setState({
            showModelWindowWrapper: !this.state.showModelWindowWrapper,
            onDelete: !this.state.onDelete
        })
        if (this.state.showModelWindowWrapper) {
            this.setState({
                showModel: false,
                onDelete: false
            })
        }
    }

    render() {
        return (
            <div className={classes.ItemWrapper}>
                <div className={classes.ImageWrapper}>
                    <img src={this.props.url} className={classes.ItemImage}/>
                    <MovieButton CloseWindow={this.handleClickCLose.bind(this)}/>
                    {this.state.showModel && 
                    <MovieButtonWindow 
                    CloseWindow={this.handleClickCLose.bind(this)}
                    EditWindow={this.openWrapperEdit.bind(this)}
                    DeleteWindow={this.openWrapperDelete.bind(this)}
                    />}
                <div className={classes.HeaderDescription}>
                    <ItemTitle name={this.props.name}/>
                    <ItemReleaseDate year={this.props.year}/>
                </div>
                <ItemGenre genre={this.props.genre}/>
            </div>
                        {this.state.showModelWindowWrapper && this.state.onEdit &&
                        <ModalWindowWrapper
                        isEditButton
                        onCloseRequest={this.openWrapperEdit.bind(this)}
                        children={<ItemWindowOnEdit 
                        title='EDIT MOVIE'
                        />
                    }
                        />}

                        {this.state.showModelWindowWrapper && this.state.onDelete &&
                        <ModalWindowWrapper
                        onCloseRequest={this.openWrapperDelete.bind(this)}
                        children={<ItemWindowOnDelete
                        title='DELETE MOVIE'
                        />}
                        />}
        </div>
        )
    }
} 

ItemImage.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
}

export default ItemImage