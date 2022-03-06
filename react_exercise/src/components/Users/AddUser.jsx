import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  function userNameHandler(e) {
    const inputName = e.target.value;
    setUserName(inputName);
  }

  function userAgeHandler(e) {
    const inputAge = e.target.value;
    setUserAge(inputAge);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (userName.trim().length === 0) {
      props.onError(userName);
      return;
    }
    if (+userAge < 0) {
      props.onError(userAge);
      return;
    }
    const user = {
      userName,
      userAge,
      userId: Math.random().toString(),
    };

    props.onAddUser(user);
    setUserAge('');
    setUserName('');
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameHandler}
        ></input>

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeHandler}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
