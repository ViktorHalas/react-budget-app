import React, { createContext,ReactNode, useContext, useState } from "react";

interface BudgetContextState {
  budget: number;
  saveBudget: (budget: number) => void;
}

interface BudgetContextProviderProps {
  children: ReactNode;
}

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

export const useBudgetContextValue = () => {
  const [budgetValue, setBudgetContextValue] = useState<BudgetContextState>(() => {
    return {
      budget: 0,
      saveBudget: (budget) => {
        setBudgetContextValue((context) => ({ ...context, budget }));
      },
    };
  });
  return budgetValue;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};