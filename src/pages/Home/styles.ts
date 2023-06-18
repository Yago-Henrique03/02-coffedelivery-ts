import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 92px;
`

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
`

export const TitleBannerContainer = styled.div`
  width: 36rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
  }

  span {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.8fr;
  grid-gap: 5px;
  margin-top: 4.125rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    display: flex;
  }
`
