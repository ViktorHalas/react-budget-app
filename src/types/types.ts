interface Expense {
  id: string,
  name: string,
  cost: string,
};

interface OptionProps {
  readonly value: string;
  readonly label: string;
}

export type {Expense, OptionProps};