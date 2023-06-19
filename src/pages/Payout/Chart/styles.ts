import styled from 'styled-components'

export const ChartContainer = styled.div`
  width: 448px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const ProductContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  img {
    max-width: 64px;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 6px;
`

export const ButtonAddContainer = styled.div`
  display: flex;
  gap: 7px;
  background: ${(props) => props.theme['base-button']};
  width: fit-content;
  padding: 6px;
  border-radius: 6px;

  p {
    font-size: 1rem;
  }

  button {
    background: none;
    border: 0;
  }
`

export const RemoveContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 6px;
  border: 0;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
`

export const ValueCoffeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: 'Baloo 2';
  font-size: 20px;
`
