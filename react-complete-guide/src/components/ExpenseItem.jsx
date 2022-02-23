import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = new Date(2022, 1, 22).toISOString();

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
