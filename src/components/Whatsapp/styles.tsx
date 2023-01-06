import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContentWhatsapp = styled.div`
  position: fixed;
  top: 100%;
  /* background-color: green; */
  width: 100%;
  /* margin: auto; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
  top: 75%;
  left: 0;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 991.98px) {
    top: 42%;
  }
`
export const ButtonWhatsapp = styled(Link)`
  border-radius: 100%;
  background-color: #25d3655e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* border: solid 0.2rem ${props => props.theme.colors.colorD}; */
`
export const AnimationWhatsapp = styled.img`
  width: 100%;
  max-width: 3.5rem;
`
