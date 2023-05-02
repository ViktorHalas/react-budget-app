import React from "react";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import { ExpenseTitle, StyledExpense } from "./styles";

export const Expenses = () => {

  return (
    <StyledExpense>
      <ExpenseTitle>Expenses</ExpenseTitle>
      <ExpenseList/>
    </StyledExpense>
  );
};
