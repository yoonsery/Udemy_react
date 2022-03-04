import React from 'react';
import { useState } from 'react';
import User from './User';

function Users(props) {
  const [userAge, userName] = props.usersInfo;

  return (
    <ul>
      {props.usersInfo.map((user) => (
        <User name={user.userName} age={user.userAge} key={user.userName} />
      ))}
    </ul>
  );
}

export default Users;
