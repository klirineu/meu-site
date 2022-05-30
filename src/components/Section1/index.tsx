import { Container, Title, Text, Image, Button, ImageButton } from './styles'

import ImgSection1 from '../../assets/imgSection1.png'
import ImgSetaButton from '../../assets/setaButton.png'

export function Section1() {
  return (
    <Container>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title>OLÁ, ME CHAMO</Title>
          {'  '}
          <Title style={{ color: 'var(--pink)' }}>LUIZ VINICIUS</Title>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Title>E SOU</Title>
          <Title style={{ color: 'var(--pink)' }}>PROGRAMADOR</Title>
        </div>
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
