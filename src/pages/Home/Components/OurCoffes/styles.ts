import styled from 'styled-components'

export const OurCoffesContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`

export const CoffesContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
`

export const CoffeContainer = styled.div`
  height: 310px;
  width: 256px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.6;
  }

  img {
    max-width: 120px;
    max-height: 120px;
    margin-top: -30px;
  }

  span {
    width: 95%;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-label']};
  }
`

export const TitleContainer = styled.div`
  margin: 12px 0px 16px 0px;
  display: flex;
  gap: 4px;

  p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    padding: 4px 8px;
    font-family: 'Roboto', monospace;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 33px;
  div:nth-child(2) {
    display: flex;
    gap: 10px;
  }
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.5rem;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  button {
    border: 0;
    background: none;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ButtonChartContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;
`
