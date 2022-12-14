import Typist from 'react-typist'

import DevComputerSvg from '..//..//assets/DevComputer.svg'
import Building from '..//..//assets/Building.svg'
import ProjetoOne from '..//..//assets/Projeto_one.svg'
import TechDev from '..//..//assets/Tech.svg'

import { BsArrowRightShort } from 'react-icons/bs'
import {
  ButtonLink,
  ChildContainer,
  ContainerMain,
  ContentImage,
  DisplayTitle,
  ParentContainer
} from './styles'
import { TimeLine } from '../Timeline'
import { ContentSubText } from '../Timeline/styles'
import { TechCards } from '../TechCards'

export function Main() {
  return (
    <ContainerMain>
      <ParentContainer>
        <ChildContainer>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto error libero incidunt quidem, laboriosam molestias quas
              assumenda tempore accusantium nostrum minima molestiae asperiores
              distinctio adipisci, alias aut. Dicta, dolorem eligendi!
            </p>
          </div>
          <ButtonLink to="#">
            <span>entrar em contato</span>
            <span>
              <BsArrowRightShort />
            </span>
          </ButtonLink>
        </ChildContainer>
        <ChildContainer>
          <ContentImage src={DevComputerSvg} />
        </ChildContainer>
      </ParentContainer>
      <DisplayTitle>sobre mim</DisplayTitle>
      <ParentContainer>
        <ChildContainer>
          <div></div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto error libero incidunt quidem, laboriosam molestias quas
              assumenda tempore accusantium nostrum minima molestiae asperiores
              distinctio adipisci, alias aut. Dicta, dolorem eligendi!
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto error libero incidunt quidem, laboriosam molestias quas
              assumenda tempore accusantium nostrum minima molestiae asperiores
              distinctio adipisci, alias aut. Dicta, dolorem eligendi!
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto error libero incidunt quidem, laboriosam molestias quas
              assumenda tempore accusantium nostrum minima molestiae asperiores
              distinctio adipisci, alias aut. Dicta, dolorem eligendi!
            </p>
          </div>
        </ChildContainer>
        <ChildContainer>
          <ContentImage src={Building} />
          <ButtonLink to="#">
            <span>entrar em contato</span>
            <span>
              <BsArrowRightShort />
            </span>
          </ButtonLink>
        </ChildContainer>
      </ParentContainer>
      <ParentContainer>
        <ChildContainer>
          <div>
            <h1>
              <Typist>
                tá, mas o que são <span>tecnologias 🤷🏻</span>, e para quê elas
                <span> servem</span> ?
              </Typist>
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto error libero incidunt quidem, laboriosam molestias quas
              assumenda tempore accusantium nostrum minima molestiae asperiores
              distinctio adipisci, alias aut. Dicta, dolorem eligendi!
            </p>
          </div>
          <div>
            <TechCards />
          </div>
        </ChildContainer>
        <ChildContainer>
          <ContentImage src={TechDev} />
        </ChildContainer>
      </ParentContainer>
      <DisplayTitle>processo de desenvolvimento</DisplayTitle>
      <ParentContainer>
        <TimeLine />
      </ParentContainer>
      <DisplayTitle>projetos</DisplayTitle>
      <ParentContainer>
        <ChildContainer>
          <ContentImage src={ProjetoOne} />
        </ChildContainer>
        <ChildContainer>
          <ContentImage src={ProjetoOne} />
        </ChildContainer>
        <ChildContainer>
          <ContentImage src={ProjetoOne} />
        </ChildContainer>
      </ParentContainer>
      <ContentSubText>
        <ButtonLink to="#">
          <span>quero um projeto!</span>
          <span>
            <BsArrowRightShort />
          </span>
        </ButtonLink>
      </ContentSubText>
    </ContainerMain>
  )
}
