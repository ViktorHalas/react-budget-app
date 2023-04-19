import React from "react";
import { Button, StyledForm, StyledInputForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import uuid from "react-uuid";

interface FormValues {
    name:string;
    cost:number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({mode: "onSubmit"});
  const { addExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = (expenses) => {
    addExpense({ ...expenses, id: uuid() });
    reset();
  };

  return (
    <StyledForm
      onSubmit = {handleSubmit(onSubmit)}
    >
      <StyledInputForm 
        type = "text"
        placeholder="Enter name ..."
        {...register("name",{
          required:"name is required",
          maxLength: { value: 15, message: "Maximum characters 15" },
          pattern: /^[A-Za-z | А-Яа-я]+$/i,
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <StyledInputForm
        type = "text"
        placeholder="Enter cost ..."
        {...register("cost",{
          valueAsNumber: true,
          required:"cost is required",
          maxLength: { value: 5, message: "High price" },
        })}
      />
      {errors.cost && <p>{errors.cost.message}</p>}
      <Button type = "submit"></Button>
    </StyledForm>
  );
};
