import React from "react";
import { Expense, useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface ExpenseItemProps {
    expense : Expense
}

export const ExpenseItem = ({expense} : ExpenseItemProps) => {
  const { deleteExpense} = useExpensesContext();
  return (
    <>
      <div>{expense.name}</div>
      <div>{expense.cost}</div>
      <button onClick={() => deleteExpense(expense.id)}></button>
    </>
  );
};
