import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { ModalOverlay, ModalWindow, ModalHeader, Cross, ModalBody, ModalFooter, FooterButton } from './style'

class ModalWindowWrapper extends Component {
    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

      componentDidMount() {
        window.addEventListener("keyup", this.handleKeyUp, false);
      }

      componentWillUnmount() {
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }

      handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
          27: () => {
            e.preventDefault();
            onCloseRequest();
            window.removeEventListener("keyup", this.handleKeyUp, false);
          }
        };
    
        if (keys[e.keyCode]) {
          keys[e.keyCode]();
        }
      }
    
    render() {
        return (
            <>
                <ModalOverlay>
                <ModalWindow>
                    <ModalHeader>
                        <Cross onClick={this.props.onCloseRequest}/>
                    </ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                        {this.props.isEditButton ? (
                        <>
                        <FooterButton onClick={this.props.onCloseRequest}>Cancel</FooterButton>
                        <FooterButton>Submit</FooterButton>
                        </>
                        ) : (<FooterButton onClick={this.props.onCloseRequest}>Confirm</FooterButton>)}
                    </ModalFooter>
                    </ModalWindow>
                </ModalOverlay>
            </>
        )
    }
}

    

ModalWindowWrapper.propTypes = {
    onCloseRequest: PropTypes.func,
    children:PropTypes.element
}

ModalWindowWrapper.defaultProps = {
    title: 'Modal title',
    onCloseRequest: () => {},
    onSubmit: () => {},
}

export default ModalWindowWrapper;
