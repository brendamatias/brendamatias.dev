import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

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

  html {
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #FAFAFA;
  }

  body, input, button {
    font: 16px 'Poppins', sans-serif;
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 16px;
    font-size: 14px;
    color: #fff;
    transition: all 0.2s;

    &:hover {
      color: ${darken(0.1, '#fff')};

      > svg {
        color: ${darken(0.1, '#CC022A')};
      }
    }
  }

  a > svg {
    color: #CC022A;
    font-size: 20px;
    transition: all 0.2s;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }

  .button {
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
    transition: all 0.2s;

    &:hover {
      background-color: ${darken(0.1, '#CC022A')};
    }
  }

  img {
    -webkit-user-draggit: none
  }

  h1 {
    font-weight: 800;
    font-size: 58px;
    letter-spacing: -2px;

    @media only screen and (max-width: 480px) {
      font-size: 40px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 46px;
    line-height: 50px;
    max-width: 510px;
    margin-bottom: 44px;
    margin-top: 14px;

    @media only screen and (max-width: 480px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 80px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;

    &::before {
      content: '';
      width: 48px;
      height: 4px;
      background-color: #CC022A;
      margin-right: 22px;
    }
  }

  .wrapper {
    background: linear-gradient(149.9deg, #090917 52.38%, #CC022A 187.98%);
  }

  .container , .wrapper > div {
    padding: 180px 20px;
    width: 1100px;
    margin: 0 auto;

    @media only screen and (max-width: 1100px) {
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      padding: 120px 46px;
    }
  }
`;

export default GlobalStyle;
