import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/wrapper';

// import UserList from './UserList';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserState, setUserState] = useState('');
    // const [enteredAgeState, setAgeState] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        console.log(nameInputRef, ageInputRef)
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name / age (non-empty values)',
            })
            console.log("not age", error)
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age',
            })
            console.log("age", error)
            return;
        }
        // console.log(enteredUserName, enteredAge)

        props.onAddUser(enteredUserName, enteredAge);
        nameInputRef.current.value = ''  //rarely use this method
        ageInputRef.current.value = ''
    }

    // const usernameChangeHandler = (event) => {
    //     setUserState(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     console.log(event)
    //     setAgeState(event.target.value)
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal onClick={errorHandler} title={error.title} message={error.message}></ErrorModal>}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" ref={nameInputRef} type="text"></input>
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" ref={ageInputRef} type="number" ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;