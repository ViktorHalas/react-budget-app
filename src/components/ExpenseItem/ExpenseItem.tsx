import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface ExpenseItemProps {
  id: string,
  name: string,
  cost: number,
};

export const ExpenseItem = ({name, cost, id} : ExpenseItemProps) => {
  const { deleteExpense} = useExpensesContext();
  return (
    <>
      <div>{name}</div>
      <div>{cost}</div>
      <button onClick={() => deleteExpense(id)}></button>
    </>
  );
};
