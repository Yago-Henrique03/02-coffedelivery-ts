import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
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
`
