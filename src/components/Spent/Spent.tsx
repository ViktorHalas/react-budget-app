import React, { useEffect, useState } from "react";
import { StyledSpent } from "./styles";
import { useCurrencyContext, useExpensesContext } from "context";

export const Spent = () => {
  const { expenses } = useExpensesContext();
  const [spent, setSpent] = useState(0);
  const {currencyValue} = useCurrencyContext();
  useEffect(() => {
    setSpent(expenses.reduce((spent, {cost}) => spent + Number(cost), 0));
  }, [expenses]);
  return (
    <StyledSpent>Spent so far: {currencyValue}{spent}</StyledSpent>
  );
};
