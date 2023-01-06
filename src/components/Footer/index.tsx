import {
  ContainerFooter,
  ContentFileds,
  ContentFooter,
  SocialButton,
  TextFooter
} from './styles'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export function ComponentFooter() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <TextFooter>
          Nos acompanhe em nossas redes sociais e fique por dentro das novidades
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
