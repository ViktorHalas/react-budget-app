import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CurrencyContextProvider>
    <BudgetContextProvider>
      <ExpensesContextProvider>
        <GlobalStyles/>
        <App/>
      </ExpensesContextProvider>
    </BudgetContextProvider>
  </CurrencyContextProvider>
);
