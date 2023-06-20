import styled from 'styled-components'

export const PayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 640px 448px;
  grid-gap: 32px;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`

export const FormContainer = styled.form`
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
    width: 1fr;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme['purple-light']};
      transition: 0.4s;
    }
  }
`

export const ChartContainer = styled.div`
  width: 448px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`
