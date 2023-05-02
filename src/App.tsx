import React from "react";
import { StyledContainer } from "./styles";
import { Budget, Expenses, Form } from "components";

function App() {
  return (
    <StyledContainer>
      <Budget/>
      <Expenses/>
      <Form />
    </StyledContainer>
  );
}

export default App;
