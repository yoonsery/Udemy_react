import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedData);
    setIsEditing(false);
  }

  function startEditinHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditinHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
