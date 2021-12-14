// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseItemPiece from "./ExpenseItemPiece";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  return expenses.map(expense => {
    return (
      <Card className="expense-item" key={expense.id}>
        <ExpenseDate expense={expense} />
        <ExpenseItemPiece expense={expense} />
      </Card>
    );
  });
}

export default ExpenseItem;
