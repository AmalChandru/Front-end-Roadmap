import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //function for obtaining selected year from ExpensesFilter.js
  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
export default Expenses;
