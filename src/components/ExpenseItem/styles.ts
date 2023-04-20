import styled from "styled-components";

const ExpenseItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid #CCD5FF;
`;

const Name = styled.div`
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const CostGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Cost = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 2px 10px;
  margin-right: 20px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 10px;
  background: #23c9ff;
`;

const Button = styled.button`
  font-size: 20px;
`;

export {ExpenseItemContainer, CostGroup, Name, Cost, Button};