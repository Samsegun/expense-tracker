import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  // const [type, setType] = useState("button");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = Event => {
    setEnteredTitle(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: Event.target.value,
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: Event.target.value };
    // });
  };

  const amountChangeHandler = Event => {
    setEnteredAmount(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: Event.target.value,
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: Event.target.value };
    // });
  };

  const dateChangeHandler = Event => {
    setEnteredDate(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: Event.target.value,
    // });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: Event.target.value };
    // });
  };

  const clickHandler = () => {
    setIsClicked(true);
  };

  const submitHandler = Event => {
    Event.preventDefault();

    if (enteredTitle && enteredAmount && enteredDate) {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setIsClicked(false);
    } else if (!isClicked) {
      console.log("enter only valid values!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {isClicked && (
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
        )}
        {isClicked && (
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        )}
        {isClicked && (
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        )}
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={clickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
