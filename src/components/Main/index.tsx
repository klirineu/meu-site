import {
  ContentBlock,
  ContentFlow,
  DisplayButton,
  DisplayImage,
  DisplayText
} from '../Content/styles'

import {
  AnimationImage,
  ContainerProjects,
  ContentMain,
  MainTitle
} from './styles'
import { ComponentCards } from '../Cards'
import { ComponentWhatsapp } from '../Whatsapp'

import { BsArrowRightShort } from 'react-icons/bs'

import AboutUs from '..//..//assets/AboutUs.gif'
import PGProject from '..//..//assets/PlayGround.svg'

export function ComponentMain() {
  return (
    <ContentMain>
      <MainTitle>nossos serviços</MainTitle>
      <ComponentCards />
      <MainTitle>quem somos</MainTitle>

      <ContentFlow>
        <ContentBlock>
          <DisplayImage src={AboutUs} />
        </ContentBlock>
        <ContentBlock>
          <DisplayText>
            Somos uma empresa de desenvolvimento de software, preparamos e
            desenvolvemos nossos projetos de forma organizada e compacta,
            aplicando o uso de tecnologias visadas pelo mercado. Trazendo
            qualidade e desempenho para nossos produtos desenvolvidos. Nosso
            principal objetivo é oferecer um bom atendimento e um ótimo
            trabalho.
          </DisplayText>
          <DisplayButton to="#">
            <span>fazer orçamento</span>
            <span>
              <BsArrowRightShort />
            </span>
          </DisplayButton>
        </ContentBlock>
      </ContentFlow>
      <MainTitle>projetos</MainTitle>

      <ContainerProjects>
        <div className="container">
          <div className="box">
            <div className="imgBx">
              <AnimationImage src={PGProject} />
            </div>
            <div className="content">
              <div>
                <h2>sistema de apostas</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <AnimationImage src={PGProject} />
            </div>
            <div className="content">
              <div>
                <h2>sistema de apostas</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <AnimationImage src={PGProject} />
            </div>
            <div className="content">
              <div>
                <h2>sistema de apostas</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <AnimationImage src={PGProject} />
            </div>
            <div className="content">
              <div>
                <h2>sistema de apostas</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi accusamus molestias quidem iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerProjects>

      <ComponentWhatsapp />
    </ContentMain>
  )
}
