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
import { BsArrowRightShort, BsCodeSlash } from 'react-icons/bs'
import { BiChip, BiMobileAlt } from 'react-icons/bi'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import {
  ContentDescription,
  FloatingBubble,
  HeaderCard,
  LittleBubble,
  WrapperCard
} from '../Cards/styles'

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
      <WrapperBlocks>
        <WrapperCard>
          <HeaderCard>
            <FloatingBubble>
              <BsCodeSlash />
            </FloatingBubble>
            <LittleBubble />
          </HeaderCard>
          <ContentDescription>
            <h1>
              programador <span>&</span> desenvolvedor web
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officiis illum nam perferendis omnis et laudantium
              consequuntur corrupti. Numquam assumenda inventore saepe, ipsa
              incidunt alias quas eaque distinctio esse repellendus?
            </p>
          </ContentDescription>
        </WrapperCard>
        <WrapperCard>
          <HeaderCard>
            <FloatingBubble>
              <BiChip />
            </FloatingBubble>
            <LittleBubble />
          </HeaderCard>
          <ContentDescription>
            <h1>
              desenvolvedor <span>de</span> sistemas
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officiis illum nam perferendis omnis et laudantium
              consequuntur corrupti. Numquam assumenda inventore saepe, ipsa
              incidunt alias quas eaque distinctio esse repellendus?
            </p>
          </ContentDescription>
        </WrapperCard>
        <WrapperCard>
          <HeaderCard>
            <FloatingBubble>
              <BiMobileAlt />
            </FloatingBubble>
            <LittleBubble />
          </HeaderCard>
          <ContentDescription>
            <h1>
              desenvolvedor <span>de</span> aplicação mobile
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officiis illum nam perferendis omnis et laudantium
              consequuntur corrupti. Numquam assumenda inventore saepe, ipsa
              incidunt alias quas eaque distinctio esse repellendus?
            </p>
          </ContentDescription>
        </WrapperCard>
        <WrapperCard>
          <HeaderCard>
            <FloatingBubble>
              <RiShoppingBasket2Line />
            </FloatingBubble>
            <LittleBubble />
          </HeaderCard>
          <ContentDescription>
            <h1>
              e-commerce <span>&</span> marktplace
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officiis illum nam perferendis omnis et laudantium
              consequuntur corrupti. Numquam assumenda inventore saepe, ipsa
              incidunt alias quas eaque distinctio esse repellendus?
            </p>
          </ContentDescription>
        </WrapperCard>
      </WrapperBlocks>
    </ContentMain>
  )
}
