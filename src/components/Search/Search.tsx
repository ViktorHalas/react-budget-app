import React from "react";
import { StyledSearch } from "./styles";

interface SearchProps {
  placeholder: string;
  expensesCallBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ expensesCallBack, placeholder }: SearchProps) => {
  return <StyledSearch placeholder={placeholder} onChange={expensesCallBack}></StyledSearch>;
};