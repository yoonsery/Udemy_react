import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import InvalidInput from './components/InvalidInput';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }

  function handleError(message) {
    setIsError(true);
    if (message === '') {
      console.log(`Please enter a name`);
      setErrMessage(`name and age(non-empty values).`);
    } else {
      console.log(`Invalid age`);
      setErrMessage(`age (> 0).`);
    }
  }

  function handleErrorClick() {
    setIsError(false);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} onError={handleError} />

      {isError ? (
        <InvalidInput onClick={handleErrorClick} message={errMessage} />
      ) : (
        <Users usersInfo={users} />
      )}
    </div>
  );
}

export default App;
