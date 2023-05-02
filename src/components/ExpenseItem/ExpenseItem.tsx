import React from "react";
import { Button, Cost, CostGroup, ExpenseItemContainer, Name } from "./styles";
import { useCurrencyContext, useExpensesContext } from "context";

interface ExpenseItemProps {
  id: string,
  name: string,
  cost: string,
};

export const ExpenseItem = ({name, cost, id} : ExpenseItemProps) => {
  const { deleteExpense} = useExpensesContext();
  const {currencyValue} = useCurrencyContext();
  return (
    <ExpenseItemContainer>
      <Name>{name}</Name>
      <CostGroup>
        <Cost>{currencyValue}{cost}</Cost>
        <Button onClick={() => deleteExpense(id)}>×</Button>
      </CostGroup>
    </ExpenseItemContainer>
  );
};
