import React, { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpent } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

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
