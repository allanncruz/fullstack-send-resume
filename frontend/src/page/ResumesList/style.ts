
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  text-align: center;
`