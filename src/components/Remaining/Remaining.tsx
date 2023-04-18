import React, { useEffect, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Overspending, StyledRemaining } from "./styles";

export const Remaining = () => {
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();
  const [remaining, setRemaining] = useState(0);
  const [isOverspending, setIsOverspending] = useState(true);

  useEffect(() => {
    if (remaining >= 0) {
      setIsOverspending(true);
    }
    if (remaining < 0) {
      setIsOverspending(false);
    }
  }, [remaining]);

  useEffect(() => {
    setRemaining(budget - expenses.reduce((spent, {cost}) => spent + cost, 0));
  }, [expenses, budget]);

  return (
    <>
      {isOverspending 
        ?<StyledRemaining>
        Remaining: {remaining}
        </StyledRemaining>
        :<Overspending>
        Overspending by {remaining * -1}
        </Overspending>
      }
    </>
  );
};
