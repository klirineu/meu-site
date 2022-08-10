import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 100px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    .image {
      display: none;
    }
  }
`

export const Text = styled.h1`
  text-align: center;
  color: var(--green);
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: -10px;
`
export const Title = styled.p`
  color: var(--blue-light);
  margin-bottom: 25px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: justify;
  }
`
export const Image = styled.img`
  width: 450px;
  margin-left: 40px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
  margin-left: 100px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    width: 300px;
    padding-left: 15px;
    margin-left: 0;
  }
`

export const ImageButton = styled.img`
  width: 40px;
  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`
