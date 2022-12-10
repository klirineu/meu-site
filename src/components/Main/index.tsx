import {
  ButtonLink,
  ContainerMain,
  ContentImage,
  ContentSection,
  WrapperSection
} from './styles'
import Typist from 'react-typist'
import DevComputerSvg from '..//..//assets/DevComputer.svg'
import { BsArrowRightShort, BsCodeSlash } from 'react-icons/bs'
import { BiChip, BiMobileAlt } from 'react-icons/bi'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import {
  WrapperCard,
  CardHeader,
  FloatingBubble,
  LittleBubble,
  CardBody,
  ContentDescription,
  ContainerCard
} from '../Cards/styles'

export function Main() {
  return (
    <ContainerMain>
      <ContentSection>
        <WrapperSection>
          <div>
            <h1>
              <Typist>
                olá, me chamo <span>luiz vinicius</span> e sou
                <span> programador</span>
              </Typist>
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sapiente consequuntur saepe consequatur! Possimus error cumque
              nesciunt iure nisi quia, enim maiores natus eveniet temporibus sit
              facere nobis vero vel.
            </p>
          </div>
          <div>
            <ButtonLink to="#">
              entrar em contato
              <i>
                <BsArrowRightShort />
              </i>
            </ButtonLink>
          </div>
        </WrapperSection>
        <WrapperSection>
          <ContentImage src={DevComputerSvg} />
        </WrapperSection>
      </ContentSection>
      {/* <ContentSection> */}
      {/* <WrapperSection> */}
      <ContainerCard>
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
      </ContainerCard>
      {/* </WrapperSection> */}
      {/* </ContentSection> */}
    </ContainerMain>
  )
}
