import styled from 'styled-components'

export const WrapperCard = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
export const HeaderCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  position: relative;
`
export const ContentDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--blue-dark-ish);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
  }
  p {
    color: var(--blue-light);
    font-weight: 500;
    font-style: normal;
    padding: 1rem;
    /* max-width: 80%; */
  }
`
export const FloatingBubble = styled.div`
  width: 125px;
  height: 125px;
  background: linear-gradient(
    180deg,
    rgba(82, 213, 241, 1) 0%,
    rgba(190, 34, 249, 1) 100%
  );
  border-radius: 100%;
  border: solid #ebebeb 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #fff;
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
  top: 20%;
  left: 60%;
  transform: translate(-50%, -50%);
  border: solid #fff 0.2rem;
`
