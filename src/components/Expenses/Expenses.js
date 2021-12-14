import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
}

export default Expenses;
