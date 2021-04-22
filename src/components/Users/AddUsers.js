import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
// import UserList from './UserList';

const AddUser = (props) => {
    const [enteredUserState, setUserState] = useState('');
    const [enteredAgeState, setAgeState] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserState.trim().length === 0 && enteredAgeState.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name / age (non-empty values)',
            })
            console.log("not age", error)
            return;
        }
        if (+enteredAgeState < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age',
            })
            console.log("age", error)
            return;
        }
        console.log(enteredUserState, enteredAgeState)

        props.onAddUser(enteredUserState, enteredAgeState);

        setUserState('');
        setAgeState('');
    }

    const usernameChangeHandler = (event) => {
        setUserState(event.target.value)
    }

    const ageChangeHandler = (event) => {
        console.log(event)
        setAgeState(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal onClick={errorHandler} title={error.title} message={error.message}></ErrorModal>}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserState} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" type="number" value={enteredAgeState} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;