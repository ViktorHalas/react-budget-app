import { Currency } from "config";
import { ReactNode, createContext, useContext, useState } from "react";
import { SingleValue } from "react-select";
import { OptionProps } from "types";

export const options: OptionProps[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

interface CurrencyContextState {
  options: OptionProps[];
  option: OptionProps;
  handleCurrencySelect: (event: SingleValue<OptionProps>) => void;
  currencyValue: string;
}

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const CurrencyContext = createContext<CurrencyContextState>({} as CurrencyContextState);

const useCurrencyContextValue = () => {
  const [currency, setCurrency] = useState<CurrencyContextState>(() => {
    return {
      options: options,
      option: options[0],
      currencyValue: options[0].value,
      handleCurrencySelect: (event: SingleValue<OptionProps>) => {
        if (event) {
          setCurrency((context) => ({ ...context, option: event, currencyValue: event.value }));
        }
      },
    };
  });
  return currency;
};

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};