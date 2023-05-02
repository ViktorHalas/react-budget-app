import React from "react";
import { Button, FormContainer, FormTitle, StyledForm, StyledInputForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import uuid from "react-uuid";
import { useBudgetContext, useExpensesContext } from "context";

interface FormValues {
    name:string;
    cost:string;
}

export const Form = () => {
  const { budget } = useBudgetContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({mode: "onSubmit"});
  const { addExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = (expenses) => {
    if (budget > 0){
      addExpense({ ...expenses, id: uuid() });
      reset();
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Expense</FormTitle>
      <StyledForm
        onSubmit = {handleSubmit(onSubmit)}
      >
        <StyledInputForm 
          type = "text"
          placeholder="Enter name ..."
          {...register("name",{
            required:"name is required",
            maxLength: { value: 15, message: "Maximum characters 15" },
            pattern: {value: /^[A-Za-z | А-Яа-я]+$/i, message: "Only letters"},
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <StyledInputForm
          type = "text"
          placeholder="Enter cost ..."
          {...register("cost",{
            required:"cost is required",
            maxLength: { value: 5, message: "High price" },
            pattern: {value: /^[1-9]\d*|0$/, message: "Only number above 0"}
          })}
        />
        {errors.cost && <p style={{ color: "red" }}>{errors.cost.message}</p>}
        <Button type = "submit">Done</Button>
      </StyledForm>
    </FormContainer>
  );
};
