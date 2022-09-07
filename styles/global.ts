import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #FAFAFA;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: rgb(0, 55, 107);
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    -webkit-user-draggit: none
  }

  main {
    > .wrapper {
      padding: 0 20px 56px 20px;
      margin: 0 auto;
      max-width: 935px;
    }
  }
`;

export default GlobalStyle;
