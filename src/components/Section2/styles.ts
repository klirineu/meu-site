import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`

export const Card = styled.div`
  text-align: center;
  width: 220px;
  margin: 30px;
`

export const CardLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`

export const CardText = styled.h3`
  color: var(--green);
  margin-bottom: 10px;
`

export const CardTitle = styled.p`
  color: var(--blue-light);
  font-size: 14px;
`
