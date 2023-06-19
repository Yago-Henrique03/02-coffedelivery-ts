import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoxContainer,
  MainContainer,
  StatusOrderContainer,
  TitleOrder,
  LocaleIcon,
  LocaleText,
  TimerContainer,
  TimerText,
  IconContainer,
  PaymentContainer,
  PaymentText,
} from './styles'
import bannerImg from '../../assets/Illustration.svg'

export function CompletedBuy() {
  return (
    <MainContainer>
      <StatusOrderContainer>
        <TitleOrder>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleOrder>
        <BoxContainer>
          <IconContainer>
            <LocaleIcon>
              <MapPin size={16} weight="fill" color="#FFFFFF" />
            </LocaleIcon>
            <LocaleText>
              <p>
                Entrega em <span>Rua João daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Franca, SP</p>
            </LocaleText>
          </IconContainer>
          <IconContainer>
            <TimerContainer>
              <Timer size={16} weight="fill" color="#FFFFFF" />
            </TimerContainer>
            <TimerText>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </TimerText>
          </IconContainer>
          <IconContainer>
            <PaymentContainer>
              <CurrencyDollar size={16} weight="fill" color="#FFFFFF" />
            </PaymentContainer>
            <PaymentText>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </PaymentText>
          </IconContainer>
        </BoxContainer>
      </StatusOrderContainer>
      <img src={bannerImg} alt="" />
    </MainContainer>
  )
}
