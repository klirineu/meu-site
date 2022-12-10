import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  animation: go-back 1s;
  @keyframes go-back {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0);
    }
  }
`
export const WrapperCard = styled.div`
  /* background-color: red; */
  width: 280px;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  @media screen and (max-width: 1300px) {
    height: 30rem;
  }
  @media screen and (max-width: 600px) {
    height: 25.5rem;
  }
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--blue-dark-ish);
    text-align: center;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }
  p {
    font-size: 0.95rem;
    font-weight: 500;
    text-align: center;
    color: var(--blue-light);
  }
`
export const FloatingBubble = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(82, 213, 241, 1) 0%,
    rgba(190, 34, 249, 1) 100%
  );
  border-radius: 100%;
  border: solid #ebebeb 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
`
export const LittleBubble = styled.div`
  width: 30px;
  height: 30px;
  background: linear-gradient(
    180deg,
    rgba(82, 213, 241, 1) 0%,
    rgba(190, 34, 249, 1) 100%
  );
  border-radius: 100%;
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(90%, -50%);
  border: solid #fff 0.2rem;
`
