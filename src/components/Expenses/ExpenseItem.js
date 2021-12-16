import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseItemPiece from "./ExpenseItemPiece";
import "./ExpenseItem.css";

function ExpenseItem({ expenses, filteredYear }) {
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  if (filteredExpenses.length === 0) {
    return <p className="expense-item__fallback">No Expenses Found</p>;
  } else {
    return filteredExpenses.map(expense => {
      return (
        <Card className="expense-item" key={expense.id}>
          <ExpenseDate expense={expense} />
          <ExpenseItemPiece expense={expense} />
        </Card>
      );
    });
  }
}

export default ExpenseItem;
