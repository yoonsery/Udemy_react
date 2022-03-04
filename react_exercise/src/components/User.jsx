import React from 'react';

function User(props) {
  console.log(props.name, props.age);

  return <li>{`${props.name} (${props.age} years old)`}</li>;
}

export default User;
