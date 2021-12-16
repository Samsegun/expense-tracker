import "./ExpenseItem.css";

function ExpenseItemPiece({ expense }) {
  return (
    <div className="expense-item__description">
      <h2>{expense.title}</h2>
      <div className="expense-item__price">${expense.amount}</div>
    </div>
  );
}

export default ExpenseItemPiece;
