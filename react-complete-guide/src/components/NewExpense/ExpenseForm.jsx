import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  function titleChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  }

  function amountChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  }

  function dateChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
    props.onSaveExpenseData(userInput);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Title</label>
          <input
            className="input" //
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Amount</label>
          <input
            className=""
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="">Date</label>
          <input
            className=""
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
