import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const CardGroup = styled.div`
  display: grid;
  grid-row: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export {Header, Title, CardGroup};