import styled from 'styled-components'

import ImageBackground from '../../assets/footer.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-image: url(${ImageBackground});
  background-repeat: no-repeat;
  background-position: center center;
`

export const Menu = styled.div`
  text-align: center;
`

export const TextMenu = styled.strong`
  text-transform: uppercase;
  text-align: center;
  color: var(--shape);
`
