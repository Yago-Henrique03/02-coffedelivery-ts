import styled from 'styled-components'

export const PayoutContainer = styled.form`
  display: grid;
  grid-template-columns: 640px 448px;
  grid-gap: 32px;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`

export const ChartContainer = styled.div`
  width: 448px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 640px;
  border-radius: 6px;
`

export const TitleFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  line-height: 130%;
  gap: 7px;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', monospace;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', monospace;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
`

export const FieldInputsContainer = styled.div`
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`

export const CepContainer = styled(BaseInput)`
  width: 200px;
  height: 42px;
`

export const RuaContainer = styled(BaseInput)`
  width: 100%;
`

export const NumberContainer = styled(BaseInput)`
  width: 200px;
`

export const ComplementContainer = styled(BaseInput)`
  width: 348px;
`

export const BairroContainer = styled(BaseInput)`
  width: 200px;
`

export const CityContainer = styled(BaseInput)`
  width: 276px;
`

export const EstadoContainer = styled(BaseInput)`
  width: 60px;
`

export const PayMethodContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 12px;
  border-radius: 6px;

  div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    h1 {
      font-family: 'Roboto', monospace;
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background: ${(props) => props.theme['base-button']};
    width: 180px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      transition: 0.4s;
    }
  }
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
    cursor: pointer;
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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['purple-light']};
    transition: 0.5s;
  }
`

export const ValueCoffeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: 'Baloo 2';
  font-size: 20px;
`

export const PriceValueContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  div:first-child {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  div:nth-child(3) {
    margin-bottom: 33px;
  }
`

export const ConfirmOrderContainer = styled.button`
  width: 100%;
  padding: 12px;
  font-weight: 700;
  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: 0.5s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const NoItemsOnCart = styled.div`
  border: 1px solid ${(props) => props.theme['base-hover']};
  height: 100px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  h1 {
    margin: 0px;
    color: ${(props) => props.theme['base-hover']};
  }
`
