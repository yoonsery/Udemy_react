import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      props.onError(enteredName);
      return;
    }
    if (+enteredAge < 1) {
      props.onError(enteredAge);
      return;
    }
    const user = {
      enteredName,
      enteredAge,
      userId: Math.random().toString(),
    };

    props.onAddUser(user);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef}></input>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef}></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
