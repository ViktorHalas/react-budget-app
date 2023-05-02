import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BudgetForm, Button, Input, StyledAviable, StyledText } from "./styles";
import { useBudgetContext, useCurrencyContext } from "context";
import { useToggle } from "hooks";


interface BudgetValues {
  budgetValue: number;
}

export const Aviable = () => {
  const { budget, saveBudget } = useBudgetContext();
  const [isChanged, setIsChanged] = useToggle();
  const { register, handleSubmit, reset } = useForm<BudgetValues>();
  const onSubmit: SubmitHandler<BudgetValues> = ({ budgetValue }) => {
    if(budgetValue > 0){
      saveBudget(budgetValue);
      reset();
      setIsChanged();
    }
  };
  const {currencyValue} = useCurrencyContext();
  return (
    <StyledAviable>
      {isChanged
        ?<>
          <StyledText>
              Budget: {currencyValue}{budget}
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