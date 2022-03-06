import React from 'react';
import Card from '../UI/Card';
import User from './User';
import styles from './Users.module.css';

function Users(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.usersInfo.map((user) => (
          <User name={user.userName} age={user.userAge} key={user.userName} />
        ))}
      </ul>
    </Card>
  );
}

export default Users;
