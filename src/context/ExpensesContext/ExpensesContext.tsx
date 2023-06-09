import React, { createContext,ReactNode, useContext, useState } from "react";
import { Expense } from "types";

interface ExpensesContextState {
  expenses: Expense[],
  deleteExpense: (id:string) => void,
  addExpense: (expense: Expense) => void,
};

interface ExpensesContextProviderProps {
  children: ReactNode,
}

export const ExpensesContext = createContext<ExpensesContextState>({} as ExpensesContextState);

export const useExpensesContextValue = () =>{
  const [expensesValue, setExpensesContextValue] = useState<ExpensesContextState>(() =>{
    return {
      expenses: [],
      deleteExpense: (id) =>{
        setExpensesContextValue(context =>
          ({...context, expenses: context.expenses.filter((exp) => exp.id !==id),}));
      },
      addExpense:(expense) => {
        setExpensesContextValue((context) => ({
          ...context,
          expenses: [...context.expenses, expense],
        }));
      },
    };
  });
  return expensesValue;
};

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({children}: ExpensesContextProviderProps) => {
  return <ExpensesContext.Provider value ={useExpensesContextValue()}>
    {children}
  </ExpensesContext.Provider>;
};
