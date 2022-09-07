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
    color: #fff;
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

  button, .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 14px 30px;
    background: #CC022A;
    border-radius: 3px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 2px;
    border: 0;
  }

  img {
    -webkit-user-draggit: none
  }

  h1 {
    font-weight: 800;
    font-size: 58px;
    letter-spacing: -2px;

    @media only screen and (max-width: 480px) {
      font-size: 42px;
    }
  }

  .container {
    padding: 0 20px;
    width: 1100px;
    margin: 0 auto;

    @media only screen and (max-width: 480px) {
      padding: 0 46px;
    }
  }
`;

export default GlobalStyle;
