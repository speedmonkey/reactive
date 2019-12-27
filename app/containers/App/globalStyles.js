import { createGlobalStyle } from 'styled-components';
import { colors } from '~/tailwind';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${colors.body};
    min-height: 100%;
    min-width: 100%;
    margin: 0;
  }

  p, label, a, span {
    line-height: 1.5em;
    font-size: 1.6rem;
    margin: unset;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  button {
    outline: none;
    cursor: pointer;
    border: none;
  }

`;

export default GlobalStyle;
