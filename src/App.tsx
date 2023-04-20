import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Budget } from "./components/Budget/Budget";
import { StyledContainer } from "./styles";

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
