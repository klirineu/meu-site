import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import Router from './config/routes/routes'

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}
