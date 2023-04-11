import React from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledExpenseList } from "./styled";

export const ExpenseList = () => {
  const {expenses} = useExpensesContext();
  return (
    <StyledExpenseList>
      {expenses.map((expense) =>{
        return <ExpenseItem expense={expense}></ExpenseItem>;
      })}
    </StyledExpenseList>
  );
};
