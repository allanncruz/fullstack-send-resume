import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  animation: ${rotate} 1s linear infinite;
  margin: 200px 0 auto;
  text-align: center;
  font-size: 40px;
  height: 40px;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Spin = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: solid 2px ${props => props.theme.colors.primary};

  &::before{
    content: "";
    background-color: ${props => props.theme.colors.white};
    width: 20px;
    height: 20px;
    display: block;
  }

`