import { ConteinerTech, ContentTech } from './styles'
import { FaReact } from 'react-icons/fa'
// import { SiJavascript } from 'react-icons/io'
import { SiNextdotjs, SiJavascript } from 'react-icons/si'

export function TechCards() {
  return (
    <ConteinerTech>
      <ContentTech>
        <SiNextdotjs />
        <span>next.js</span>
      </ContentTech>
      <ContentTech>
        <SiJavascript />
        <span>javascript</span>
      </ContentTech>
      <ContentTech>
        <FaReact />
        <span>react</span>
      </ContentTech>
    </ConteinerTech>
  )
}
