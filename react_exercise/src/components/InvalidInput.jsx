import React from 'react';
import Button from './UI/Button';
import Card from './UI/Card';

function InvalidInput(props) {
  console.log(props);
  // const { onName, onAge } = props;

  function handleSubmit(e) {
    e.preventDefault();
    props.onClick();
  }
  return (
    <Card>
      <h2>Invalid input</h2>
      <p>Please enter a valid {props.message} </p>
      {/* <p>Please enter a valid {props.onAge} </p> */}
      <form onSubmit={handleSubmit}>
        <Button name={'Okay'} />
      </form>
    </Card>
  );
}

export default InvalidInput;
