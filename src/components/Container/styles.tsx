import styled from 'styled-components'

export const ContainerPage = styled.div`
  background-color: ${props => props.theme.colors.colorD};
  width: 100%;
  max-width: 95%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 2rem;
  overflow-x: hidden;

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`
