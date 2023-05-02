import React from "react";
import { CardGroup, Header, Title } from "./styles";
import { Aviable, CurrencySelect, Remaining, Spent } from "components";

export const Budget = () => {
  return (
    <>
      <Header>
        <Title>Budget App</Title>
        <CurrencySelect/>
      </Header>
      <CardGroup>
        <Aviable/>
        <Remaining/>
        <Spent/>
      </CardGroup>
    </>
  );
};
