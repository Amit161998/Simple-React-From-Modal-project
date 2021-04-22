import React,{useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
const AddUser = (props) => {
    const [enteredUserState, setUserState] = useState('');
    const [enteredAgeState, setAgeState] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserState, enteredAgeState)
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

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserState} onChange={usernameChangeHandler}></input>
                <label htmlFor="age" >Age (Years)</label>
                <input id="age" type="number" value={enteredAgeState} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;