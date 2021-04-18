import React from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
const AddUser = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                <button type="button">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;