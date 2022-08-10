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
      <div>
        <DivRow>
          <div>
            <Title style={{ color: 'var(--pink)' }}>Tecnologias</Title>
          </div>
          <Title>que usamos</Title>
        </DivRow>
      </div>
      <DivRow>
        <Swiper
          // install Swiper modules
          className="swiper"
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
            <Image style={{ width: 150 }} src={IconExpress} alt="icon react" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: 150 }}
              src={IconTypescript}
              alt="icon react"
            />
          </SwiperSlide>
        </Swiper>
      </DivRow>
    </Container>
  )
}
