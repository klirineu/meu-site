import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background: linear-gradient(
    279deg,
    rgba(190, 34, 249, 1) 0%,
    rgba(82, 213, 241, 1) 100%
  );
  /* background-size: 400% 400%; */
  /* animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */
`
export const ContentFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`
export const TextFooter = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-style: normal;
  color: var(--color-ish);
  max-width: 70%;
  text-align: center;
  cursor: default;
  @media screen and (max-width: 1023px) {
    max-width: 100%;
    padding: 0.95rem;
  }
`
export const ContentFileds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const SocialButton = styled.div`
  color: var(--color-ish);
  font-size: 1.5rem;
  cursor: pointer;
  transition: ease-out all 0.2s;
  &:hover {
    transform: translateY(-0.5rem);
    transition: ease-out all 0.2s;
    /* background-color: var(--background);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 1rem; */
    @media screen and (max-width: 1023px) {
      transform: none;
      transition: none;
    }
  }
`
