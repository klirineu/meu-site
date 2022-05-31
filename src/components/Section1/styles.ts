import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  color: var(--green);
  margin-right: 10px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 5px;
  }
`

export const Text = styled.p`
  color: var(--blue-light);
  margin-top: 40px;
  width: 500px;

  @media only screen and (max-width: 768px) {
    text-align: justify;
    width: 300px;
  }
`

export const Image = styled.img`
  width: 500px;
  margin: 20px;
  margin-top: -15px;

  @media only screen and (max-width: 768px) {
    width: 320px;
    margin: 0;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  padding-left: 25px;
  padding-right: 5px;
  color: var(--green);
  font-weight: bold;
  font-size: 18px;
  background-color: #f6f1f8;
  border: 1px solid var(--pink);
  border-radius: 30px;
  margin-top: 60px;
  margin-bottom: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    width: 300px;
    padding-left: 15px;
  }
`

export const ImageButton = styled.img`
  width: 40px;
  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`
export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`
