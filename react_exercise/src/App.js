import React, { useState } from 'react';
import UserAddForm from './components/UserAddForm';
import InvalidInput from './components/InvalidInput';
import Users from './components/Users';

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
      console.log(`error is name`);
      setErrMessage(`name and age(non-empty values).`);
    } else {
      console.log(`error is number`);
      setErrMessage(`age (> 0).`);
    }

    // return `name and age(non-empty values).`;
    // return `age (> 0).`;
  }

  function handleErrorClick() {
    setIsError(false);
  }

  return (
    <div>
      <UserAddForm onAddUser={addUserHandler} onError={handleError} />
      {<Users usersInfo={users} />}
      {isError && (
        <InvalidInput onClick={handleErrorClick} message={errMessage} />
      )}
    </div>
  );
}

export default App;
