import styled from 'styled-components'

export const ContainerTimeLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;
`
export const SubContentTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1023px) {
    width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 3rem;
    &::-webkit-scrollbar {
      width: 0;
    }
    &::-webkit-scrollbar-track {
      border-radius: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }
  }
`
export const FlowTimeLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--blue-dark-ish);
    max-width: 160px;
    /* background-color: #f4f4f4; */
    padding: 0.35rem;
    border-radius: 0.35rem;
  }
  &:nth-child(even) {
    flex-direction: column-reverse;
  }
`
export const BubbleTime = styled.div`
  background-color: var(--pink);
  border-radius: 100%;
  border: solid 0.5rem var(--pink-light);
  width: 2rem;
  height: 2rem;
  position: relative;
`
export const ContentSubText = styled.p`
  color: var(--blue-light);
  font-size: 0.95rem;
  font-weight: 500;
  font-style: normal;
  cursor: default;
  max-width: 50%;
  margin: auto;
  text-align: center;
  /* BUTTONLINK IMPORTED MAIN REPAIRED */
  a {
    max-width: 300px;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 1023px) {
    max-width: 100%;
  }
`
