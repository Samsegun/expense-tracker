// import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  // const [expenseData, setExpenseData] = useState(expenses)

  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
}

export default Expenses;
