import { Container, Card, CardLogo, CardText, CardTitle } from './styles'

import imgProgrammer from '../../assets/Grupo 15.png'
import imgSystem from '../../assets/Grupo 16.png'
import imgMobile from '../../assets/Grupo 17.png'
import imgCommerce from '../../assets/Grupo 18.png'

export function Section2() {
  return (
    <Container>
      <Card>
        <CardLogo src={imgProgrammer} alt="Programador e desenvolvedor web" />
        <CardText>Programador & Desenvolvedor web</CardText>
        <CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          porta felis eleifend convallis eu id risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur faucibus, orci in
          molestie posuere,
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgSystem} alt="Programador e desenvolvedor web" />
        <CardText>DESENVOLVEDOR DE SISTEMA</CardText>
        <CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          porta felis eleifend convallis eu id risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur faucibus, orci in
          molestie posuere,
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgMobile} alt="Programador e desenvolvedor web" />
        <CardText>DESENVOLVEDOR DE APLICAÇÃO MOBILE</CardText>
        <CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          porta felis eleifend convallis eu id risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur faucibus, orci in
          molestie posuere,
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgCommerce} alt="Programador e desenvolvedor web" />
        <CardText>E-COMMERCE & MARKTPLACE</CardText>
        <CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          porta felis eleifend convallis eu id risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur faucibus, orci in
          molestie posuere,
        </CardTitle>
      </Card>
    </Container>
  )
}
