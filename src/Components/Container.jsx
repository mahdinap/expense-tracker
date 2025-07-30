import { useState } from "react";
import AddNewExpense from "./AddNewExoense";
import ExpenseList from "./ExpenseList";

export default function Container() {
  const [expenseList,setExpenseList]=useState([])
   function handleAddExpense(newExpense) {
    setExpenseList((prev) => [...prev, newExpense]);
  }
  return (
    <>
      <AddNewExpense onAddExpense={handleAddExpense}/>
      <ExpenseList  expenses={expenseList}/>
    </>
  );
}
