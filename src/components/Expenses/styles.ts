import styled from "styled-components";

const StyledExpense = styled.div`
  display: grid;
  grid-row: repeat(1fr, 3);
  row-gap: 30px;
`;

const ExpenseTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export {StyledExpense, ExpenseTitle};