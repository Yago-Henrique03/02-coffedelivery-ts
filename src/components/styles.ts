import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 6.5rem;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 12px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`

export const CityContainer = styled.div`
  padding: 0.5rem;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${(props) => props.theme['purple-dark']};

  background: ${(props) => props.theme['purple-light']};

  border-radius: 6px;
`

export const ChartContainer = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  width: fit-content;
  border-radius: 6px;
  position: relative;
`

export const ChartCount = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  p {
    font-size: 10px;
    color: ${(props) => props.theme.white};
  }
`
