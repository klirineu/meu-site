import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContentFlow = styled.div`
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 1.875rem; // === 30px
  padding: 0.625rem;

  @media (max-width: 575.98px) {
    flex-direction: column;
    -ms-flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    /* background-color: #08ef7c; */
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    /* background-color: #99ff00; */
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    /* background-color: #00ffe1; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    -ms-flex-direction: row;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const ContentBlock = styled.div`
  width: 100%;
  /* height: 415px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  padding: 0.625rem;
  gap: 1.875rem;
  text-align: center;
  animation: slideShow 1s ease 0s 1 normal both;
  @keyframes slideShow {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* background-color: black; */
  /* div:nth-child(1) {
    font-size: 1.875rem;
  } */

  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`
export const DisplayTitle = styled.h1`
  font-size: 1.875rem; // === 30px
  font-weight: 700;
  /* background-color: red; */
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorE};
  span {
    color: ${props => props.theme.colors.colorB};
  }
  @media (max-width: 575.98px) {
    font-size: 1.563rem; // === 25px
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 1.75rem; // === 28px
  }
  /* @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 1.75rem;
  } */
`
export const DisplayText = styled.p`
  font-size: 0.906rem; // === 14.5px
  font-weight: 500;
  color: ${props => props.theme.colors.colorG};
  &::first-letter {
    text-transform: capitalize;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`
export const DisplayButton = styled(Link)`
  background-color: ${props => props.theme.colors.colorF};
  border: solid 0.05rem ${props => props.theme.colors.colorB};
  border-radius: 2rem;
  color: ${props => props.theme.colors.colorE};
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.906rem;
  padding: 0.375rem; // === 6px
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  span:nth-child(1) {
    padding-left: 0.3rem;
  }
  span:nth-child(2) {
    background: linear-gradient(
      180deg,
      rgba(82, 213, 241, 1) 0%,
      rgba(190, 34, 249, 1) 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100%;
    color: ${props => props.theme.colors.colorD};
    padding: 0.375rem;
    font-size: 0.906rem;
  }
  &:hover {
    animation: shake 1s ease 0s 1 normal both;
    @keyframes shake {
      0%,
      100% {
        transform: rotate(0deg);
        transform-origin: 0 50%;
      }

      10% {
        transform: rotate(2deg);
      }

      20%,
      40%,
      60% {
        transform: rotate(-4deg);
      }

      30%,
      50%,
      70% {
        transform: rotate(4deg);
      }

      80% {
        transform: rotate(-2deg);
      }

      90% {
        transform: rotate(2deg);
      }
    }
  }
`
export const DisplayImage = styled.img`
  @media (max-width: 575.98px) {
    width: 100%;
    max-width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    max-width: 60%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
    max-width: 60%;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 100%;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
  /* animation: slideShow 1s ease 0s 1 normal both;
  @keyframes slideShow {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  } */
`
