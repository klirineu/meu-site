import styled from 'styled-components'

export const ContentHeader = styled.div`
  width: 100%;
  min-height: 0 auto;
  font-size: 0.9rem;
  /* ===== STYLES CSS ===== */
  header.header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 0.95rem;
    transition: 0.3s;
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
    color: var(--blue-dark-ish);
    text-transform: uppercase;
    font-weight: 600;
    font-style: normal;
    cursor: pointer;
    &:nth-child(1) {
      color: var(--pink);
    }
    &:hover {
      color: var(--pink);
      transition: 0.3s all;
      box-shadow: 0 -0.05rem 0 var(--pink) inset;
    }
  }
  div.navigation > ul > button {
    border: solid 0.03rem var(--pink);
    border-radius: 0.3rem;
    padding: 0.12rem;
    width: 200px;
    font-size: 1rem;
    cursor: pointer;
    color: var(--blue-dark-ish);
    font-weight: 600;
    font-size: 0.9rem;
    font-style: normal;
    text-transform: uppercase;
    background-color: #fff;
    transition: 0.3s all;
    &:hover {
      background-color: var(--pink);
      color: #fff;
      transition: 0.3s all;
    }
  }
  div.hamburger {
    position: relative;
    width: 1.5rem;
    height: 3px;
    background-color: #333333;
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
    background-color: #333333;
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
    background-color: #333333;
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
  @media screen and (max-width: 1280px) {
    div.hamburger,
    input.toggle-menu {
      display: block;
    }
    header.header {
      padding: 10px 20px;
    }
    div.navigation > ul.menu {
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 0;
      right: -100%;
      background-color: var(--background);
      width: 100%;
      height: 100%;
      padding: 30% 0 0 0.95rem;
    }
  }
`
export const ContentLogo = styled.img`
  display: block;
  width: 100%;
  max-width: 18.5%;
  padding: 0.625rem;
  @media (max-width: 48em) {
    max-width: 35%;
  }
`
