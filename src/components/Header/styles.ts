import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10;
  }
`

export const Logo = styled.img`
  margin-top: -30px;
  margin-left: -30px;
  margin-right: 50px;
  width: 250px;
  @media only screen and (max-width: 768px) {
    margin-top: -40px;
    margin-left: -40px;
    margin-right: 0;
    width: 250px;
  }
`

export const Menu = styled.div`
  margin-top: 70px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`

export const TextMenu = styled.strong`
  text-transform: uppercase;
  margin-right: 40px;
  color: var(--green);
  &:first-child {
    color: var(--pink);
  }
  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 30px;
  }
`

export const ButtonMenu = styled.button`
  border: 1px solid var(--pink);
  border-radius: 5px;
  background-color: #f6f1f8;
  width: 170px;
  height: 30px;
  color: var(--green);
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`
