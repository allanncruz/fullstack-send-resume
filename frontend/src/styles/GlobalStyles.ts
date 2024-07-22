import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  button{
    cursor: pointer;
  }

  html, body, #root{
    height: 100%;
  }

  main {
    margin: 50px 0;
  }

  
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  h1{
    color: ${props => props.theme.colors.secondary};
    font-size: 24px;
  }

  p{
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
`;