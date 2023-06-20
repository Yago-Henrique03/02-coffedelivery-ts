import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ChartContextProvider } from './contexts/ChartAndCoffes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
