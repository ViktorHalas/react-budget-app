import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BudgetForm, Button, Input, StyledAviable, StyledText } from "./styles";
import { useToggle } from "../../hooks/useToggle";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

interface BudgetValues {
  budgetValue: number;
}

export const Aviable = () => {
  const { budget, saveBudget } = useBudgetContext();
  const [isChanged, setIsChanged] = useToggle();
  const { register, handleSubmit, reset } = useForm<BudgetValues>();
  const onSubmit: SubmitHandler<BudgetValues> = ({ budgetValue }) => {
    saveBudget(budgetValue);
    reset();
    setIsChanged();
  };
  return (
    <StyledAviable>
      {isChanged
        ?<>
          <StyledText>
              Budget: ${budget}
          </StyledText>
          <Button onClick={setIsChanged}>Edit</Button>
        </>
        :<BudgetForm onSubmit = {handleSubmit(onSubmit)}>
          <Input
            placeholder="Enter Budget..."
            type="number"
            {...register("budgetValue",{
              required: true,
              valueAsNumber:true,
            })}/>
          <Button type = "submit">Save</Button>
        </BudgetForm>
      }
    </StyledAviable>
  );
};