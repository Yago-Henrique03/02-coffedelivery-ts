import { useContext } from 'react'
import { ChartContext } from '../../../contexts/ChartAndCoffes'
import {
  PriceValueContainer,
  ConfirmOrderContainer,
  ChartContainer,
  ProductContainer,
  QuantityContainer,
  ButtonAddContainer,
  RemoveContainer,
  ValueCoffeContainer,
  NoItemsOnCart,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { Bag, Minus, Plus, Trash } from 'phosphor-react'

export function ChartPaymentContainer() {
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
                      R$ {cofe.price.toFixed(2).toString().replace('.', ',')}
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
          <h1>R$ {totalWithSend.toFixed(2).toString().replace('.', ',')}</h1>
        </div>
        <ConfirmOrderContainer type="button" onClick={() => handleRedirect()}>
          CONFIRMAR PEDIDO
        </ConfirmOrderContainer>
      </PriceValueContainer>
    </ChartContainer>
  )
}
