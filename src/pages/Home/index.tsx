import { Header } from '../../components/Header'
// import { Main } from '../../components/Main'
import { MainComponent } from '../../components/Main'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <MainComponent />
    </Container>
  )
}
