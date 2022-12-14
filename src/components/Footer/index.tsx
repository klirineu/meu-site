import {
  ContainerFooter,
  ContentFileds,
  ContentFooter,
  SocialButton,
  TextFooter
} from './styles'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <TextFooter>
          me acompanhe nas redes sociais e fique por dentro dos meus novos
          projetos
        </TextFooter>
        <ContentFileds>
          <SocialButton>
            <FaFacebookF />
          </SocialButton>
          <SocialButton>
            <FaInstagram />
          </SocialButton>
        </ContentFileds>
      </ContentFooter>
    </ContainerFooter>
  )
}
