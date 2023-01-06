import styled from 'styled-components'

export const ContainerCards = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  /* flex-direction: column;
  -ms-flex-direction: column; */
`
export const DisplayCard = styled.div`
  /* background-color: red; */
  width: 300px;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  animation: myAnim 1s ease 0s 1 normal forwards;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 262px;
  }
  /* @media (min-width: 1200px) {
    width: 260px;
  } */
`
export const CardImage = styled.img`
  width: 100%;
`
export const ContentCard = styled.div`
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
`
export const TextCard = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.colors.colorG};
  text-align: center;
  &:nth-child(1) {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1rem;
  }
  &::first-letter {
    text-transform: capitalize;
  }
`
