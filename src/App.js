import React, { useState } from 'react';
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
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      {userList.length > 0 ? <UserList users={userList}></UserList> : null}
    </div>
  );
}

export default App;

