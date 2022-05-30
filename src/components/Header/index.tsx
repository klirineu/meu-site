import { Container, Menu, Logo, TextMenu, ButtonMenu } from './styles'

import logoIcon from '../../assets/icon.png'

export function Header() {
  return (
    <Container>
      <Logo src={logoIcon} alt="logo" />
      <Menu>
        <TextMenu>Início</TextMenu>
        <TextMenu>Sobre Mim</TextMenu>
        <TextMenu>Processo de desenvolvimento</TextMenu>
        <TextMenu>Projetos</TextMenu>
        <ButtonMenu>Fazer orçamento</ButtonMenu>
      </Menu>
    </Container>
  )
}
