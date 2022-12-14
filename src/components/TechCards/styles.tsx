import styled from 'styled-components'

export const ConteinerTech = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const ContentTech = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(
    150deg,
    rgba(82, 213, 241, 1) 0%,
    rgba(190, 34, 249, 1) 100%
  );
  border-radius: 0.95rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.95rem;
  font-size: 2.3rem;
  color: var(--color-ish);
  span {
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: default;
  }
`
