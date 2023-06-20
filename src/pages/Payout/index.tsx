import {
  Bag,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
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
  NoItemsOnCart,
  ProductContainer,
  QuantityContainer,
  ButtonAddContainer,
  RemoveContainer,
  ValueCoffeContainer,
  PriceValueContainer,
  ConfirmOrderContainer,
} from './styles'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChartContext } from '../../contexts/ChartAndCoffes'

export function Payout() {
  const { products, setAddQuantity, removeQuantity, removeFromChart } =
    useContext(ChartContext)
  const itensOnChart = products.filter((product) => product.isOnChart === true)

  const totalPrice = itensOnChart.reduce((acc, currentItem) => {
    const subtotal = currentItem.price * currentItem.quantity
    return acc + subtotal
  }, 0)

  const entrega = 3.5
  const totalWithSend = totalPrice + entrega

  const navigate = useNavigate()

  function handleRedirect() {
    navigate('/Completedbuy')
  }

  return (
    <PayoutContainer onSubmit={() => handleRedirect()}>
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
        <ChartContainer>
          {itensOnChart.length === 0 ? (
            <NoItemsOnCart>
              <Bag size={32} color="#D7D5D5" />
              <h1>Você não possui itens no carrinho</h1>
            </NoItemsOnCart>
          ) : (
            itensOnChart.map((cofe: any) => {
              return (
                <ProductContainer key={cofe.id}>
                  <img src={cofe.src} alt={cofe.name} />
                  <div>
                    <p>{cofe.name}</p>
                    <QuantityContainer>
                      <ButtonAddContainer>
                        <button
                          type="button"
                          onClick={() => removeQuantity(cofe.id)}
                        >
                          <Minus size={17} color="#8047F8" />
                        </button>

                        <p>{cofe.quantity}</p>

                        <button
                          type="button"
                          onClick={() => setAddQuantity(cofe.id)}
                        >
                          <Plus size={17} color="#8047F8" />
                        </button>
                      </ButtonAddContainer>
                      <RemoveContainer
                        type="button"
                        onClick={() => removeFromChart(cofe.id)}
                      >
                        <Trash size={17} color="#8047F8" />
                        REMOVER
                      </RemoveContainer>
                      <ValueCoffeContainer>
                        <p>
                          R${' '}
                          {cofe.price.toFixed(2).toString().replace('.', ',')}
                        </p>
                      </ValueCoffeContainer>
                    </QuantityContainer>
                  </div>
                </ProductContainer>
              )
            })
          )}
          <PriceValueContainer>
            <div>
              <p>Total de Itens</p>
              <p>R$ {totalPrice.toFixed(2).toString().replace('.', ',')}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {entrega.toFixed(2).toString().replace('.', ',')}</p>
            </div>
            <div>
              <h1>Total</h1>
              <h1>
                R$ {totalWithSend.toFixed(2).toString().replace('.', ',')}
              </h1>
            </div>
            <ConfirmOrderContainer type="submit">
              CONFIRMAR PEDIDO
            </ConfirmOrderContainer>
          </PriceValueContainer>
        </ChartContainer>
      </aside>
    </PayoutContainer>
  )
}
