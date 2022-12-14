import { BsArrowRightShort } from 'react-icons/bs'
import { ButtonLink } from '../Main/styles'
import {
  BubbleTime,
  ContainerTimeLine,
  ContentSubText,
  FlowTimeLine,
  SubContentTime
} from './styles'

export function TimeLine() {
  return (
    <ContainerTimeLine>
      <SubContentTime>
        <FlowTimeLine>
          <p>reunião de início de projeto</p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>análise do projeto</p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>
            pesquisa de mercado
            <br />
            (ux/ui designer)
          </p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>
            desenvolvimento da interface
            <br />
            (ux/ui designer)
          </p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>
            escolha de linguagem e
            <br />
            tecnologia
          </p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>
            fase de teste de usabilidade e
            <br />
            funcionalidades
          </p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>produção</p>
          <BubbleTime />
        </FlowTimeLine>
        <FlowTimeLine>
          <p>entrega!</p>
          <BubbleTime />
        </FlowTimeLine>
      </SubContentTime>
      <ContentSubText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
        perspiciatis esse cumque ex facilis non aperiam harum id quo inventore
        dolorum minus exercitationem, deleniti eos? Repellat culpa perspiciatis
        molestiae.
        <ButtonLink to="#">
          <span>contato para orçamento</span>
          <span>
            <BsArrowRightShort />
          </span>
        </ButtonLink>
      </ContentSubText>
    </ContainerTimeLine>
  )
}
