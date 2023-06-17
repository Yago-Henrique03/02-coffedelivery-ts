import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-title']};
  }

  body, input, button {
    font-family: 'Roboto', monospace;
  }

  h1,h2,h3,h4 { 
    font-family: 'Baloo 2', cursive;
  }
`
