import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`

export const Logo = styled.img`
  margin-top: -30px;
  margin-left: -30px;
  margin-right: 50px;
  width: 250px;
`

export const Menu = styled.div`
  margin-top: 70px;
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
`

export const ButtonMenu = styled.button`
  border: 1px solid var(--pink);
  border-radius: 5px;
  background-color: #f6f1f8;
  width: 170px;
  height: 30px;
  color: var(--green);
  font-weight: 500;
`
