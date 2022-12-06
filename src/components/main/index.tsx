import Typist from 'react-typist'
import {
  ButtonLink,
  ContentBlock,
  ContentMain,
  DisplayImage,
  DisplayText,
  WrapperBlocks
} from './styles'
import DeveloperSVG from '..//..//assets/DevComputer.svg'
import { BsArrowRightShort } from 'react-icons/bs'

export function Main() {
  return (
    <ContentMain>
      <WrapperBlocks>
        <ContentBlock>
          <DisplayText>
            <Typist>
              olá, me chamo <span>luiz vinicius</span> e sou
              <span> programador</span>
            </Typist>
          </DisplayText>
          <DisplayText>
            <span>Lorem</span> ipsum dolor sit amet consectetur, adipisicing
            elit. Numquam reiciendis natus ut consequatur, totam, sed mollitia
            veniam sit autem voluptatibus quas ab officia ducimus hic. Labore
            suscipit temporibus earum nam?
          </DisplayText>
          <ButtonLink to="#">
            entrar em contato
            <div>
              <BsArrowRightShort />
            </div>
          </ButtonLink>
        </ContentBlock>
        <ContentBlock>
          <DisplayImage src={DeveloperSVG} />
        </ContentBlock>
      </WrapperBlocks>
    </ContentMain>
  )
}
