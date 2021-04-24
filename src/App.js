import React, { Fragment, useState } from 'react';
// import Card from './components/UI/Card';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


const App = () => {

  const [userList, setUserList] = useState([]);
  // console.log(userList)

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserlist) => {
      return [...prevUserlist, { name: uName, age: uAge }];
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      {userList.length > 0 ? <UserList users={userList}></UserList> : null}
    </Fragment>
  );
}

export default App;

