import styled from "styled-components";

const StyledAviable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background: rgb(124, 198, 254);
  border-radius: 10px;
`;

const BudgetForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  border: none;
  background-color: transparent;
  :focus,
  :hover,
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    outline: none;
    appearance: none;
  }
`;

const Button = styled.button`
  min-width: 85px;
  min-height: 36px;
  padding: 8px 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background: #FFFFFF;
  border: none;
  border-radius: 10px;
`;

const StyledText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
export {StyledAviable, BudgetForm, Input, Button, StyledText};