import { BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider } from "context";
import React, { FunctionComponent, ReactNode } from "react";

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