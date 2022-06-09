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
          <Title>
            Etiam metus massa, pharetra sed euismod id, rhoncus et tortor. Donec
            sit amet metus bibendum, aliquet nibh in, interdum lacus. In quis
            est sed magna consequat imperdiet. Maecenas purus urna, consectetur
            vel elit sit amet, ultrices rutrum nisi. Proin volutpat nulla et
            diam condimentum, non auctor nisi tempor. Nulla sed feugiat risus.
            Donec et posuere magna. Morbi commodo quam purus, et ultrices tellus
            sollicitudin a. Donec quis massa in dui tempor fringilla. Nulla
            interdum justo augue, et gravida neque viverra vel.
          </Title>
        </div>
        <div>
          <Image src={ImgSection3} alt="sobre mim" />
          <Button>
            FAZER ORÇAMENTO <ImageButton src={ImgSetaButton} alt="" />{' '}
          </Button>
        </div>
      </DivRow>
    </Container>
  )
}
