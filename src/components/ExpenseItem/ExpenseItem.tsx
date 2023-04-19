import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

interface ExpenseItemProps {
  id: string,
  name: string,
  cost: number,
};

export const ExpenseItem = ({name, cost, id} : ExpenseItemProps) => {
  const { deleteExpense} = useExpensesContext();
  const {currencyValue} = useCurrencyContext();
  return (
    <>
      <div>{name}</div>
      <div>{currencyValue}{cost}</div>
      <button onClick={() => deleteExpense(id)}></button>
    </>
  );
};
