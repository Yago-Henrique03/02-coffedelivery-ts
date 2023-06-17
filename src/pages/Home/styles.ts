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

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxTitleContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 565px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    p {
      margin-bottom: 15px;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ControlBoxContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    div {
      background-color: ${(props) => props.theme.yellow};
      padding: 0.5rem;
      border-radius: 100%;
    }
  }
`
