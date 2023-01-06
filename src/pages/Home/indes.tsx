import { ThemeProvider } from 'styled-components'
import theme from '../../themes/Themes_Page/themes'
import { ContainerPage } from '../../components/Container/styles'
import { ComponentFooter } from '../../components/Footer'
import { ComponentHeader } from '../../components/Header'
import { ComponentMain } from '../../components/Main'

export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerPage>
        <ComponentHeader />
        <ComponentMain />
      </ContainerPage>
      <ComponentFooter />
    </ThemeProvider>
  )
}
