import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}>

        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card cssClass={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p className={classes.content}>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
    )
}


const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <Backdrop
                        onClick={props.onClick}>
                    </Backdrop>,
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={props.title}
                        message={props.message}
                        onClick={props.onClick}>
                    </ModalOverlay>,
                    document.getElementById('overlay-root')
                )
            }
        </React.Fragment>

    )
}

export default ErrorModal;