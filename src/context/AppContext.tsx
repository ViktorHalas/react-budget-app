import React, { FunctionComponent, ReactNode } from "react";
import { BudgetContextProvider } from "./BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./ExpensesContext/ExpensesContext";



interface ChildrenProps {
  children: ReactNode;
}

const combineComponents = (components: FunctionComponent<ChildrenProps>[]) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }: ChildrenProps) =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
  );
};

export const AppContextProvider = combineComponents([
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
]);