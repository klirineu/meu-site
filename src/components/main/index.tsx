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
  CardBody,
  CardHeader,
  ContentDescription,
  FloatingBubble,
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
          <DisplayText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nisi
            perspiciatis ab facere quia culpa. Necessitatibus, eligendi a dicta
            porro velit, dolorum accusamus, quod eveniet tenetur sit eius
            ratione quis!
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
          <CardHeader>
            <FloatingBubble>
              <BsCodeSlash />
              <LittleBubble />
            </FloatingBubble>
          </CardHeader>
          <CardBody>
            <ContentDescription>
              <h1>
                programador <span>&</span> desenvolvedor web
              </h1>
              <p>
                Atualmente com as pessoas mais conectadas o primeiro contato, na
                maioria das vezes é feito através do website, portanto tem
                importante desempenho na visibilidade e crescimento do cliente,
                sendo essencial para concretizar negócios com clientes reais e
                potenciais.
              </p>
            </ContentDescription>
          </CardBody>
        </WrapperCard>
        <WrapperCard>
          <CardHeader>
            <FloatingBubble>
              <BiChip />
              <LittleBubble />
            </FloatingBubble>
          </CardHeader>
          <CardBody>
            <ContentDescription>
              <h1>
                desenvolvedor <span>de</span> sistema
              </h1>
              <p>
                Desenvolvemos softwares para empresa e startups, robustos e
                escaláveis, que facilitam upgrades e manutenções e que
                atravessam décadas em funcionamento.{' '}
              </p>
            </ContentDescription>
          </CardBody>
        </WrapperCard>
        <WrapperCard>
          <CardHeader>
            <FloatingBubble>
              <BiMobileAlt />
              <LittleBubble />
            </FloatingBubble>
          </CardHeader>
          <CardBody>
            <ContentDescription>
              <h1>
                desenvolvedor <span>de</span> aplicação mobile
              </h1>
              <p>
                Somos especializados em inovação, totalmente dedicado a
                desenvolver aplicativos focados no seu usuário.{' '}
              </p>
            </ContentDescription>
          </CardBody>
        </WrapperCard>
        <WrapperCard>
          <CardHeader>
            <FloatingBubble>
              <RiShoppingBasket2Line />
              <LittleBubble />
            </FloatingBubble>
          </CardHeader>
          <CardBody>
            <ContentDescription>
              <h1>
                e-commerce <span>&</span> marktplace
              </h1>
              <p>
                Somos especializados em inovação, totalmente dedicado a
                desenvolver aplicativos focados no seu usuário.{' '}
              </p>
            </ContentDescription>
          </CardBody>
        </WrapperCard>
      </WrapperBlocks>
    </ContentMain>
  )
}
