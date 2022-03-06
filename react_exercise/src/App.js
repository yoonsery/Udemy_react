import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import ErrorModal from './components/UI/ErrorModal';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }

  function handleError(message) {
    if (message === '') {
      setError({
        title: 'Invalid input',
        message: 'name and age (non-empty values).',
      });
    } else {
      setError({
        title: 'Invalid age',
        message: 'age (> 0).',
      });
    }
  }

  function handleErrorClick() {
    setError(null);
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} onError={handleError} />
      {error && (
        <ErrorModal
          onClick={handleErrorClick}
          title={error.title}
          message={error.message}
        />
      )}
      <Users usersInfo={users} />
    </>
  );
}

export default App;
