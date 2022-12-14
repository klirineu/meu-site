import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #ffffff;
      --blue: #6C63FF;
      --pink: #CC66F3;
      --pink-light: #F6F1F8;
      --blue-dark-ish: #3565A5;
      --blue-light: #4d9df2;
      --color-ish: #fff;
      --background-ish: linear-gradient(
        279deg,
        rgba(53, 101, 165, 1) 0%,
        #f4f5f6 100%
      );

    }
    *,*::before,*::after {
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    width: 100vw;
    background: var(--background);
    --webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0;
    }
    ::-webkit-scrollbar-track {
      border-radius: 0;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background: transparent; 
    }
  }
`
