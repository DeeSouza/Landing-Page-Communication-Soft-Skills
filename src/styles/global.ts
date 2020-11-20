import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    &.hidden-scroll {
      overflow: hidden;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    min-height: 100%;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Lato', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  ul {
    list-style: none;
  }
`;
