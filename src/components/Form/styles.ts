import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  grid-row: 1fr 1fr;
  row-gap: 30px;
`;

const FormTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-row: repeat(1fr,3);
  row-gap: 20px;
`;

const StyledInputForm = styled.input`
  padding: 15px 10px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 15px 0;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background: rgb(35, 201, 255);
  border: none;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export {FormContainer, FormTitle, StyledForm, StyledInputForm, Button};