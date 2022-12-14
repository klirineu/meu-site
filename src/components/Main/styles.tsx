import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerMain = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
  padding: 0.95rem;
`
export const ParentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  /* background-color: red; */
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`
export const ChildContainer = styled.div`
  width: 100%;
  padding: 0.95rem;
  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 2.5rem;
    a {
      margin-right: 130px;
    }
    @media screen and (max-width: 1023px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &:nth-child(1) > div:nth-child(1) > h1 {
    color: var(--blue-dark-ish);
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 600;
    font-style: normal;
    text-align: left;
    cursor: default;
    span {
      color: var(--pink);
    }
    @media screen and (max-width: 1023px) {
      text-align: center;
    }
  }
  &:nth-child(1) > div:nth-child(2) {
    color: var(--blue-light);
    font-size: 0.95rem;
    font-weight: 500;
    font-style: normal;
    cursor: default;
  }
`
export const ContentImage = styled.img`
  width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 75%;
  }
`
export const ButtonLink = styled(Link)`
  border: solid 0.03rem var(--pink);
  background-color: var(--pink-light);
  border-radius: 2rem;
  padding: 0.35rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  color: var(--blue-dark-ish);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span:nth-child(1) {
    padding-left: 0.35rem;
  }
  span:nth-child(2) {
    background: linear-gradient(
      180deg,
      rgba(82, 213, 241, 1) 0%,
      rgba(190, 34, 249, 1) 100%
    );
    border-radius: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 1023px) {
    display: inline-flex;
    width: 300px;
    margin: 0 auto;
  }
`
export const DisplayTitle = styled.h1`
  color: var(--blue-dark-ish);
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.25rem;
  &::after {
    content: '';
    display: block;
    width: 130px;
    height: 4px;
    background: linear-gradient(
      279deg,
      rgba(53, 101, 165, 1) 0%,
      rgba(244, 245, 246, 1) 100%
    );
    border-radius: 2rem;
  }
  &:nth-last-of-type(2) {
    &::after {
      content: '';
      display: block;
      width: 160px;
      height: 5px;
      margin: 5.5rem 0;
      transform: rotate(90deg);
      background: linear-gradient(
        279deg,
        rgba(53, 101, 165, 1) 0%,
        rgba(244, 245, 246, 1) 100%
      );
      border-radius: 2rem;
    }
    /* margin-bottom: 4rem; */
  }
`
