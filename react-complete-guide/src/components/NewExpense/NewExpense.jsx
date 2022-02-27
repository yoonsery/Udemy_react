import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expensedData);
    props.onAddExpense(expensedData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
