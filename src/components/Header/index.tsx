import { LogoBranding, WrapperHeader } from './styles'

import Logo from '..//..//assets/Logo_Tech.png'
import { ComponentContent } from './../Content/index'

export function ComponentHeader() {
  return (
    <WrapperHeader>
      <div className="header">
        <LogoBranding src={Logo} />
        <div className="navigation">
          <input type="checkbox" className="toggle-menu" />
          <div className="hamburger" />
          <ul className="menu">
            <a href="#">início</a>
            <a href="">quem somos</a>
            <a href="#">projetos</a>
            <a href="#">processo de desenvolvimento</a>
            <button>fazer orçamento</button>
          </ul>
        </div>
      </div>
      <ComponentContent />
    </WrapperHeader>
  )
}
