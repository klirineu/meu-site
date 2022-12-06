import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContentMain = styled.main`
  width: 100%;
  min-height: 100%;
`
export const WrapperBlocks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
`
export const ContentBlock = styled.div`
  width: 100%;
  /* background-color: green; */
`
export const DisplayText = styled.p`
  width: 100%;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--blue-dark-ish);
  cursor: default;
  span {
    color: var(--pink);
  }
  &:nth-child(2) {
    text-transform: lowercase;
    font-size: 0.95rem;
    margin: 0.95rem 0;
    color: var(--blue-light);
    span {
      text-transform: capitalize;
      color: var(--blue-light);
    }
  }
`
export const ButtonLink = styled(Link)`
  border: solid 0.06rem var(--pink);
  border-radius: 2rem;
  padding-left: 0.65rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: var(--blue-dark-ish);
  cursor: pointer;
  background-color: var(--pink-light);
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  width: 235px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: 0.25rem;
    background: linear-gradient(
      180deg,
      rgba(82, 213, 241, 1) 0%,
      rgba(190, 34, 249, 1) 100%
    );
    border-radius: 100%;
    color: #fff;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    max-width: 235px;
    margin: 1rem auto;
  }
`
export const DisplayImage = styled.img`
  width: 100%;
  max-width: 70%;
  float: right;
  @media screen and (max-width: 1023px) {
    /* width: 100%; */
    max-width: 65%;
    margin: auto;
    float: none;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin: auto;
    float: none;
  }
`
