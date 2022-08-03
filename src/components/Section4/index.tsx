import {
  Container,
  Text,
  Title,
  Image,
  Button,
  ImageButton,
  DivRow
} from './styles'

import { Navigation, Autoplay, Lazy } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'

import ImgSetaButton from '../../assets/setaButton.png'
import IconReact from '../../assets/react.png'
import IconReactNative from '../../assets/reactnative.png'
import IconJS from '../../assets/js.png'
import IconNode from '../../assets/node.png'
import IconExpress from '../../assets/express.png'
import IconTypescript from '../../assets/typescript.png'
import ImgSection4 from '../../assets/Section4.png'

export function Section4() {
  return (
    <Container>
      <div style={{ width: '100%' }}>
        <DivRow>
          <Title>Tá, mas o que é</Title>
          <div>
            <Title style={{ color: 'var(--pink)' }}>Tecnologias</Title>
          </div>
          <Title>? E</Title>
        </DivRow>
        <DivRow>
          <Title>Para que elas</Title>
          <Title style={{ color: 'var(--pink)' }}>servem</Title>
          <Title>?</Title>
        </DivRow>
      </div>
      <DivRow>
        <div>
          <Text>
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
          </Text>
          <Swiper
            style={{ width: 500, paddingTop: 20, marginTop: 50 }}
            // install Swiper modules
            modules={[Navigation, Autoplay, Lazy]}
            slidesPerView={2}
            autoplay
            lazy
          >
            <SwiperSlide>
              <Image style={{ width: 150 }} src={IconReact} alt="icon react" />
            </SwiperSlide>
            <SwiperSlide>
              <Image style={{ width: 150 }} src={IconJS} alt="icon react" />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                style={{ width: 150 }}
                src={IconReactNative}
                alt="icon react"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image style={{ width: 150 }} src={IconNode} alt="icon react" />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                style={{ width: 150 }}
                src={IconExpress}
                alt="icon react"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                style={{ width: 150 }}
                src={IconTypescript}
                alt="icon react"
              />
            </SwiperSlide>
          </Swiper>
          <div style={{ marginTop: 50 }}></div>
        </div>

        <div>
          <Image src={ImgSection4} alt="sobre mim" />
        </div>
      </DivRow>
    </Container>
  )
}
