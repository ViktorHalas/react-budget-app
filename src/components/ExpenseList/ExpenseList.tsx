import React from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledExpenseList } from "./styled";

export const ExpenseList = () => {
  const {expenses} = useExpensesContext();
  return (
    <StyledExpenseList>
      {expenses.map(({name, cost, id}) =>{
        return <ExpenseItem key={id} name={name} cost={cost} id={id}></ExpenseItem>;
      })}
    </StyledExpenseList>
  );
};
