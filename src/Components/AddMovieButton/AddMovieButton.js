import React, { Component } from 'react'
import classes from './AddMovieButton.module.css'
import ModalWindowWrapper from '../../ModalWindow/ModalWIndowWrapper/ModalWindowWrapper'
import ButtonModalContent from './ButtonModalContent/ButtonModalContent'

class AddMovieButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
        handleClick() {
            this.setState({
                showModal: !this.state.showModal
            })
        }

        render() {
            return (
            <div>
                <div className={classes.AddMovieButton} onClick={this.handleClick.bind(this)}>
                    <span 
                    className={classes.ButtonText}>
                        + ADD MOVIE
                    </span>
                </div>
                {this.state.showModal && 
                <ModalWindowWrapper 
                onCloseRequest={this.handleClick.bind(this)}
                children={<ButtonModalContent title='ADD MOVIE'/>}
                isEditButton
                />
                }
            </div>
            )
        }
    }

export default AddMovieButton