import React from "react";
import { Aviable } from "../Aviable/Aviable";
import { CardGroup, Header, Title } from "./styles";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";

export const Budget = () => {
  return (
    <>
      <Header>
        <Title/>
      </Header>
      <CardGroup>
        <Aviable/>
        <Remaining/>
        <Spent/>
      </CardGroup>
    </>
  );
};
