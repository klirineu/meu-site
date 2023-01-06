import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    min-width: 100%;
    min-height: 100vh;
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
