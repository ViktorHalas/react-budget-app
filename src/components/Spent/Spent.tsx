import React, { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { expenses } = useExpensesContext();
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    setSpent(expenses.reduce((spent, {cost}) => spent + cost, 0));
  }, [expenses]);
  return (
    <StyledSpent>Spent so far: {spent}</StyledSpent>
  );
};
