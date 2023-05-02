import React, { useEffect, useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledExpenseList } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { Search } from "../Search/Search";

export const ExpenseList = () => {
  const {expenses} = useExpensesContext();
  const [expensesSearch, setExpensesSearch] = useState(expenses);
  useEffect(() => setExpensesSearch(expenses), [expenses]);

  const expensesCallBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpensesSearch(expenses.filter((expense) => expense.name.indexOf(e.target.value) !== -1));
  };

  const searchDebounce = useDebounce(expensesSearch);
  return (
    <StyledExpenseList>
      <Search placeholder = "search..." expensesCallBack={expensesCallBack} />
      {searchDebounce.map(({name, cost, id}) =>{
        return <ExpenseItem key={id} name={name} cost={cost} id={id}></ExpenseItem>;
      })}
    </StyledExpenseList>
  );
};
