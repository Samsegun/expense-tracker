import { useState } from "react";
import "./ExpenseItem.css";

function ExpenseItemPiece({ expense }) {
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${expense.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </div>
  );
}

export default ExpenseItemPiece;
