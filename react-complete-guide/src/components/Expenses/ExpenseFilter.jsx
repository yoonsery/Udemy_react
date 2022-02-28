import React from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function dropdownChangeHandler(e) {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="label">Filter by Year</label>
        <select
          className=" select"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
