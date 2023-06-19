import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  PayoutContainer,
  FormContainer,
  TitleFormContainer,
  CepContainer,
  RuaContainer,
  NumberContainer,
  ComplementContainer,
  BairroContainer,
  CityContainer,
  EstadoContainer,
  FieldInputsContainer,
  PayMethodContainer,
  ButtonsContainer,
  ChartContainer,
  PriceValueContainer,
  ConfirmOrderContainer,
} from './styles'
import { ChartPaymentContainer } from './Chart'

export function Payout() {
  return (
    <PayoutContainer>
      <main>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <TitleFormContainer>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleFormContainer>
          <FieldInputsContainer>
            <div>
              <CepContainer type="number" placeholder="CEP" />
            </div>
            <div>
              <RuaContainer type="text" placeholder="Rua" />
            </div>
            <div>
              <NumberContainer type="number" placeholder="Número" />
              <ComplementContainer type="text" placeholder="Complemento" />
            </div>
            <div>
              <BairroContainer type="text" placeholder="Bairro" />
              <CityContainer type="text" placeholder="Cidade" />
              <EstadoContainer type="text" placeholder="UF" />
            </div>
          </FieldInputsContainer>
        </FormContainer>
        <PayMethodContainer>
          <div>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ButtonsContainer>
            <button type="button">
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </button>
            <button type="button">
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DEBITO
            </button>
            <button type="button">
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </button>
          </ButtonsContainer>
        </PayMethodContainer>
      </main>
      <aside>
        <h1>Cafés selecionados</h1>
        <ChartPaymentContainer />
      </aside>
    </PayoutContainer>
  )
}
