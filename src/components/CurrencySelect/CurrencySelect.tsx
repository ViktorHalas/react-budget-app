import { useCurrencyContext } from "context";
import React from "react";
import Select from "react-select";


export const CurrencySelect = () => {
  const { options, option, handleCurrencySelect } = useCurrencyContext();
  return <Select
    options={options} 
    defaultValue={option} 
    onChange={handleCurrencySelect}
  />;
};