import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  /* height: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background: linear-gradient(
    279deg,
    rgba(190, 34, 249, 1) 0%,
    rgba(82, 213, 241, 1) 100%
  );
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
  color: ${props => props.theme.colors.colorD};
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
  color: ${props => props.theme.colors.colorD};
  font-size: 1.5rem;
  cursor: pointer;
  transition: ease-out all 0.2s;
  &:hover {
    transform: translateY(-0.5rem);
    transition: ease-out all 0.2s;
  }
`
