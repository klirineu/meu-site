import { Container, Menu, TextMenu } from './styles'

import iconInsta from '../../assets/icon-instagram.png'

export function Footer() {
  return (
    <Container>
      <Menu>
        <TextMenu>Me acompanhe nas redes sociais</TextMenu>
        <br />
        <TextMenu>e fique por dentro dos meus novos projetos</TextMenu>
      </Menu>
      <a
        href="https://www.instagram.com/t3ch.innovation/"
        style={{ marginTop: 20 }}
        target="_blank"
        rel="noreferrer"
      >
        <img style={{ width: 40 }} src={iconInsta} alt="logo insta" />
      </a>
    </Container>
  )
}
