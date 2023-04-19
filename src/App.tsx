import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Budget } from "./components/Budget/Budget";

function App() {
  return (
    <>
      <Budget/>
      <Expenses/>
      <Form />
    </>
  );
}

export default App;
