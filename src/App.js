import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 270.5,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [list, setList] = useState(INITIAL_EXPENSES);

  const expenseHandler = enteredData => {
    console.log(enteredData);
    setList(prevData => {
      return [enteredData, ...prevData];
    });
  };

  return (
    <div>
      <h2>Let's get started!!!!!!!!!!!!!</h2>
      <NewExpense onSaveData={expenseHandler} />
      <Expenses expenses={list} />
    </div>
  );
}

export default App;
