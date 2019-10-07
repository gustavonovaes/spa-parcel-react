import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2&display=swap');

  :root {
    --color-text-primary: #333;
    --color-primary: #4bb543;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Exo 2', Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-play-state: paused !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }

  #app {
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;

    color: var(--color-text-primary);
  }
`