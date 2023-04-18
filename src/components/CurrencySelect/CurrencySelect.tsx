
import React from "react";
import Select from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CurrencySelect = () => {
  const { options, option, handleCurrencySelect } = useCurrencyContext();
  return <Select
    options={options} 
    defaultValue={option} 
    onChange={handleCurrencySelect}
  />;
};