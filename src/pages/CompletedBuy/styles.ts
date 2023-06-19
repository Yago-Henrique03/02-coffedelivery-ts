import styled from 'styled-components'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 76px;
  margin-top: 5rem;
  img {
    margin-top: 5rem;
  }
`

export const StatusOrderContainer = styled.div``

export const TitleOrder = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BoxContainer = styled.div`
  position: relative;
  padding: 2.5rem;
  margin-top: 2.5rem;

  padding: 2.5rem;
  border-radius: 6px 36px;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: ${(props) => props.theme.background};

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: inherit;
  }
`
export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 100%;
  width: fit-content;
`

const Text = styled.div``

export const LocaleIcon = styled(Icon)`
  background-color: ${(props) => props.theme.purple};
`

export const LocaleText = styled(Text)`
  span {
    font-weight: bold;
  }
`

export const TimerContainer = styled(Icon)`
  background-color: ${(props) => props.theme.yellow};
`

export const TimerText = styled(Text)`
  span {
    font-weight: bold;
  }
`

export const PaymentContainer = styled(Icon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const PaymentText = styled(Text)`
  span {
    font-weight: bold;
  }
`
