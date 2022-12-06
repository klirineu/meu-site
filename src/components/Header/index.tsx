import { ContentHeader, ContentLogo } from './styles'
import Logo from '..//..//assets/TechInnovation2.png'

export function Header() {
  return (
    <ContentHeader>
      <header className="header">
        <ContentLogo src={Logo} />
        <div className="navigation">
          <input type="checkbox" className="toggle-menu" />
          <div className="hamburger" />
          <ul className="menu">
            <a href="#">início</a>
            <a href="#">sobre mim</a>
            <a href="#">porcesso de desenvolvimento</a>
            <a href="#">projetos</a>
            <button>fazer orçamento</button>
          </ul>
        </div>
      </header>
    </ContentHeader>
  )
}
