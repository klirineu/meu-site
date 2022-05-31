import {
  Container,
  Title,
  Text,
  Image,
  Button,
  ImageButton,
  DivRow
} from './styles'

import ImgSection1 from '../../assets/imgSection1.png'
import ImgSetaButton from '../../assets/setaButton.png'

export function Section1() {
  return (
    <Container>
      <div>
        <DivRow>
          <Title>OLÁ, ME CHAMO</Title>
          {'  '}
          <Title style={{ color: 'var(--pink)' }}>LUIZ VINICIUS</Title>
        </DivRow>
        <DivRow>
          <Title>E SOU</Title>
          <Title style={{ color: 'var(--pink)' }}>PROGRAMADOR</Title>
        </DivRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          porta felis eleifend convallis eu id risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur faucibus, orci in
          molestie posuere,
        </Text>
        <Button>
          Entrar em contato <ImageButton src={ImgSetaButton} alt="" />{' '}
        </Button>
      </div>
      <Image src={ImgSection1} alt="" />
    </Container>
  )
}
