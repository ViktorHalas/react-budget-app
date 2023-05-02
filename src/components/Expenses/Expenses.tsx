import React from "react";
import { ExpenseTitle, StyledExpense } from "./styles";
import { ExpenseList } from "components";

export const Expenses = () => {

  return (
    <StyledExpense>
      <ExpenseTitle>Expenses</ExpenseTitle>
      <ExpenseList/>
    </StyledExpense>
  );
};
