import {
  Container,
  Text,
  Title,
  Image,
  Button,
  ImageButton,
  DivRow
} from './styles'

import ImgSetaButton from '../../assets/setaButton.png'
import ImgSection3 from '../../assets/Section3.png'
import ImgTraco from '../../assets/traco.png'

export function Section3() {
  return (
    <Container>
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <Text>Sobre Mim</Text>
        <img style={{ width: 160 }} src={ImgTraco} alt="" />
      </div>
      <DivRow>
        <div>
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            justo porta felis eleifend convallis eu id risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur faucibus, orci in
            molestie posuere, libero libero tincidunt dui, sit amet semper risus
            tellus at ex. Duis tempus volutpat ex id gravida. In bibendum sapien
            nec efficitur hendrerit. Nulla facilisi. Sed consectetur nunc quis
            felis dignissim, faucibus scelerisque orci scelerisque. In imperdiet
            tincidunt iaculis. In hac habitasse platea dictumst. Phasellus
            iaculis lacinia lacus, et fringilla dui euismod sit amet. Nam ut
            velit vitae nunc sollicitudin hendrerit. Pellentesque commodo nulla
            id nulla ultrices, et sodales quam ornare.
          </Title>
        </div>
        <div>
          <Image className="image" src={ImgSection3} alt="sobre mim" />
          <Button>
            FAZER ORÇAMENTO <ImageButton src={ImgSetaButton} alt="" />{' '}
          </Button>
        </div>
      </DivRow>
    </Container>
  )
}
