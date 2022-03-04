import React, { useState } from 'react';
import Button from './UI/Button';

function UserAddForm(props) {
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
    if (userAge < 0) {
      props.onError(userAge);
      return;
    }
    const user = {
      userName,
      userAge,
    };

    props.onAddUser(user);
    setUserAge('');
    setUserName('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={userName} onChange={userNameHandler}></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" value={userAge} onChange={userAgeHandler}></input>
      </div>

      <Button name={'Add User'} />
    </form>
  );
}

export default UserAddForm;
