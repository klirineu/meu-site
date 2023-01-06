import {
  ContentBlock,
  ContentFlow,
  DisplayButton,
  DisplayImage,
  DisplayText,
  DisplayTitle
} from './styles'
import DevBuilding from '..//..//assets/Developer.gif'

import { BsArrowRightShort } from 'react-icons/bs'
import Typist from 'react-typist'

export function ComponentContent() {
  return (
    <ContentFlow>
      <ContentBlock>
        <DisplayTitle className="title__principal">
          <Typist>
            <span>Trazendo</span> inovação e soluções criativas de software para
            o seu negócio
          </Typist>
        </DisplayTitle>
        <DisplayText>
          Criatividade e software bem pensados para o seu negócio, ta com uma
          ideia traz pra gente. Construímos seu produto da forma que desejar
        </DisplayText>
        <DisplayButton to="#">
          <span>entrar em contato</span>
          <span>
            <BsArrowRightShort />
          </span>
        </DisplayButton>
      </ContentBlock>
      <ContentBlock>
        <DisplayImage src={DevBuilding} />
      </ContentBlock>
    </ContentFlow>
  )
}
