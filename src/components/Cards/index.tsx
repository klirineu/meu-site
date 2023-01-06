import {
  CardImage,
  ContainerCards,
  ContentCard,
  DisplayCard,
  TextCard
} from './styles'
import WebDevelopment from '..//..//assets/WebDeveloper.gif'
import MobileDevelopment from '..//..//assets/MobileDeveloper.gif'
import Designer from '..//..//assets/Designer.gif'

export function ComponentCards() {
  return (
    <ContainerCards>
      <DisplayCard>
        <CardImage src={WebDevelopment} />
        <ContentCard>
          <TextCard>desenvolvimento web</TextCard>
          <TextCard>
            O desenvolvimento web inclui criação, codificação e programação de
            sites e seus respectivos elementos e linguagens.
          </TextCard>
        </ContentCard>
      </DisplayCard>
      <DisplayCard>
        <CardImage src={MobileDevelopment} />
        <ContentCard>
          <TextCard>desenvolvimento mobile</TextCard>
          <TextCard>
            O desenvolvimento mobile é um tipo de rotina de criação de soluções
            de TI voltadas para tablets, smartphones e outros dispositivos
            móveis.{' '}
          </TextCard>
        </ContentCard>
      </DisplayCard>
      <DisplayCard>
        <CardImage src={Designer} />
        <ContentCard>
          <TextCard>ux/ui designer</TextCard>
          <TextCard>
            designer de interface do usuário, promove a criação e o
            desenvolvimento da interface explorada pelo usuário em um produto ou
            serviço.{' '}
          </TextCard>
        </ContentCard>
      </DisplayCard>
    </ContainerCards>
  )
}
