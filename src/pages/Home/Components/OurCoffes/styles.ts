import styled from 'styled-components'

export const OurCoffesContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`

export const CoffesContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
`
