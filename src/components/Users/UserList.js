import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (props) => {
    console.log(props)
    return (
        <Card cssClass={classes.users}>
            <ul>
                {
                    props.users.map((userData, index) => (
                        <li key={index}>
                            {userData.name} ( {userData.age} years old )
                        </li>
                    ))
                }
            </ul>
        </Card>

    );
}

export default UserList;