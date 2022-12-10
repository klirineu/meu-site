import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
`
export const ContentSection = styled.section`
  /* background-color: purple; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.65rem;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`
export const WrapperSection = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: auto;
  font-size: 0.95rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  padding: 0.65rem;
  text-align: left;
  &:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  div:nth-child(1) {
    h1 {
      color: var(--blue-dark-ish);
      font-weight: 600;
      font-style: normal;
      text-transform: uppercase;
      span {
        color: var(--pink);
      }
    }
  }
  div:nth-child(2) {
    p {
      color: var(--blue-light);
      font-weight: 500;
      font-style: normal;
    }
  }
  div:nth-child(3) {
    @media screen and (max-width: 768px) {
      display: block;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1023px) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ButtonLink = styled(Link)`
  border: solid var(--pink) 0.03rem;
  background-color: var(--pink-light);
  border-radius: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: var(--blue-dark-ish);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(82, 213, 241, 1) 0%,
      rgba(190, 34, 249, 1) 100%
    );
    border-radius: 100%;
    color: #fff;
    padding: 0.35rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1023px) {
  }
`
export const ContentImage = styled.img`
  width: 100%;
  max-width: 70%;
  @media screen and (max-width: 1023px) {
    max-width: 70%;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`

// export const WrapperMain = styled.main`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 1.5rem;
//   @media screen and (max-width: 1023px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `
// export const ContainerMain = styled.div`
//   display: flex;
//   background-color: red;
//   /* flex-direction: column; */
// `
// export const ContentMain = styled.div`
//   /* background-color: red; */
//   width: 100%;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   justify-content: flex-start;
//   align-items: flex-start;
//   font-size: 0.95rem;
//   text-align: left;
//   &:nth-child(1) > div > h1 {
//     color: var(--blue-dark-ish);
//     font-weight: 600;
//     font-style: normal;
//     text-transform: uppercase;
//     span {
//       color: var(--pink);
//     }
//   }
//   &:nth-child(1) > div > p {
//     color: var(--blue-light);
//     font-weight: 500;
//     font-style: normal;
//     text-transform: lowercase;
//   }
//   &:nth-child(1) > div {
//     @media screen and (max-width: 768px) {
//       text-align: center;
//     }
//   }
//   &:nth-child(1) > div:nth-child(3) {
//     margin-top: 1.5rem;
//     @media screen and (max-width: 768px) {
//       display: block;
//       margin: 0 auto;
//     }
//   }
//   &:nth-child(2) {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//   }
// `
// export const ButtonLink = styled(Link)`
//   border: solid var(--pink) 0.03rem;
//   background-color: var(--pink-light);
//   border-radius: 2rem;
//   text-transform: uppercase;
//   text-decoration: none;
//   font-weight: 600;
//   color: var(--blue-dark-ish);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   padding: 0.25rem;
//   i {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: linear-gradient(
//       180deg,
//       rgba(82, 213, 241, 1) 0%,
//       rgba(190, 34, 249, 1) 100%
//     );
//     border-radius: 100%;
//     color: #fff;
//     padding: 0.35rem;
//     font-size: 1.5rem;
//   }
//   @media screen and (max-width: 768px) {
//     padding-left: 0.95rem;
//   }
// `
// export const ContentImage = styled.img`
//   width: 100%;
//   max-width: 70%;
//   @media screen and (max-width: 1023px) {
//     max-width: 70%;
//   }
//   @media screen and (max-width: 600px) {
//     max-width: 100%;
//   }
// `
