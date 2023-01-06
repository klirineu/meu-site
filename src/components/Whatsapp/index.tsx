import { AnimationWhatsapp, ButtonWhatsapp, ContentWhatsapp } from './styles'
import Whatsapp from '..//..//assets/Whatsapp.gif'

export function ComponentWhatsapp() {
  return (
    <ContentWhatsapp>
      <ButtonWhatsapp to="#">
        <AnimationWhatsapp src={Whatsapp} />
      </ButtonWhatsapp>
    </ContentWhatsapp>
  )
}
