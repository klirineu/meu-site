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
          Atualmente com as pessoas mais conectadas o primeiro contato, na
          maioria das vezes é feito através do website, portanto tem importante
          desempenho na visibilidade e crescimento do cliente, sendo essencial
          para concretizar negócios com clientes reais e potenciais.
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgSystem} alt="Programador e desenvolvedor web" />
        <CardText>DESENVOLVEDOR DE SOFTWARE</CardText>
        <CardTitle>
          Desenvolvemos softwares para empresa e startups, robustos e
          escaláveis, que facilitam upgrades e manutenções e que atravessam
          décadas em funcionamento.
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgMobile} alt="Programador e desenvolvedor web" />
        <CardText>DESENVOLVEDOR DE APLICAÇÃO MOBILE</CardText>
        <CardTitle>
          Somos especializados em inovação, totalmente dedicado a desenvolver
          aplicativos focados no seu usuário.
        </CardTitle>
      </Card>
      <Card>
        <CardLogo src={imgCommerce} alt="Programador e desenvolvedor web" />
        <CardText>E-COMMERCE & MARKTPLACE</CardText>
        <CardTitle>
          Mostre o melhor dos seus produtos. Permita que seus visitantes
          naveguem pelas mercadorias, adicionem itens ao carrinho de compras,
          finalizem a compra de forma simples e eficiente e deixem avaliações
          para os produtos.
        </CardTitle>
      </Card>
    </Container>
  )
}
