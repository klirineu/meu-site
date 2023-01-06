import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 1.875rem;
  /* background-color: red; */
  div.header {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    /* background-color: red; */
    padding: 1rem;
  }
  div.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul.menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    transition: 0.5s;
    gap: 2rem;
  }
  div.navigation > ul > a {
    text-decoration: none;
    color: ${props => props.theme.colors.colorB};
    text-transform: uppercase;
    font-weight: 600;
    font-style: normal;
    cursor: pointer;
    &:nth-child(1) {
      color: ${props => props.theme.colors.colorB};
    }
    &:hover {
      color: ${props => props.theme.colors.colorB};
      transition: 0.3s all;
      box-shadow: 0 -0.05rem 0 ${props => props.theme.colors.colorB} inset;
    }
  }
  div.navigation > ul > button {
    border: solid 0.03rem ${props => props.theme.colors.colorB};
    border-radius: 0.3rem;
    padding: 0.12rem;
    width: 200px;
    font-size: 1rem;
    cursor: pointer;
    color: ${props => props.theme.colors.colorB};
    font-weight: 600;
    font-size: 0.9rem;
    font-style: normal;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.colorF};
    transition: 0.3s all;
    &:hover {
      background-color: ${props => props.theme.colors.colorB};
      color: #fff;
      transition: 0.3s all;
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
      width: 170px;
    }
  }
  div.hamburger {
    position: relative;
    width: 1.5rem;
    height: 3px;
    background-color: ${props => props.theme.colors.colorA};
    border-radius: 10px;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
  }
  div.hamburger::before,
  div.hamburger::after {
    content: '';
    position: absolute;
    height: 3px;
    right: 0;
    background-color: ${props => props.theme.colors.colorA};
    border-radius: 10px;
    transition: 0.3s;
  }
  div.hamburger::before {
    top: -10px;
    width: 1.2rem;
  }
  div.hamburger::after {
    top: 10px;
    width: 1.2rem;
    background-color: ${props => props.theme.colors.colorA};
  }
  input.toggle-menu {
    position: absolute;
    width: 30px;
    height: 100%;
    z-index: 3;
    cursor: pointer;
    opacity: 0;
  }
  div.hamburger,
  input.toggle-menu {
    display: none;
  }
  div.navigation input:checked ~ div.hamburger {
    background-color: transparent;
  }
  div.navigation input:checked ~ div.hamburger::before {
    top: 0;
    transform: rotate(-45deg);
    width: 30px;
  }
  div.navigation input:checked ~ div.hamburger::after {
    top: 0;
    transform: rotate(45deg);
    width: 30px;
  }
  div.navigation input:checked ~ ul.menu {
    right: 0;
  }
  @media only screen and (max-width: 992px) {
    div.hamburger,
    input.toggle-menu {
      display: block;
    }
    div.navigation > ul.menu {
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 0;
      right: -100%;
      background-color: ${props => props.theme.colors.colorD};
      padding: 30% 0 0 0.95rem;
    }
  }
  @media only screen and (min-width: 992px) {
    div.navigation > ul > a {
      text-decoration: none;
      color: ${props => props.theme.colors.colorB};
      text-transform: uppercase;
      font-weight: 600;
      font-style: normal;
      font-size: 0.8rem;
      cursor: pointer;
      &:nth-child(1) {
        color: ${props => props.theme.colors.colorB};
      }
      &:hover {
        color: ${props => props.theme.colors.colorB};
        transition: 0.3s all;
        box-shadow: 0 -0.05rem 0 ${props => props.theme.colors.colorB} inset;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    div.navigation > ul > a {
      text-decoration: none;
      color: ${props => props.theme.colors.colorB};
      text-transform: uppercase;
      font-weight: 600;
      font-style: normal;
      font-size: 0.8rem;
      cursor: pointer;
      &:nth-child(1) {
        color: ${props => props.theme.colors.colorB};
      }
      &:hover {
        color: ${props => props.theme.colors.colorB};
        transition: 0.3s all;
        box-shadow: 0 -0.05rem 0 ${props => props.theme.colors.colorB} inset;
      }
    }
  }
`
export const LogoBranding = styled.img`
  @media (max-width: 575.98px) {
    width: 100%;
    max-width: 6.5rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    max-width: 6.5rem;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
    max-width: 6.5rem;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 100%;
    max-width: 6.5rem;
  }
  @media (min-width: 1200px) {
    width: 100%;
    max-width: 10rem;
  }
`
