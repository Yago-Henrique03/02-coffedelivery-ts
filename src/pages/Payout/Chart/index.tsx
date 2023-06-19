import { PriceValueContainer, ConfirmOrderContainer } from '../styles'
import {
  ChartContainer,
  ProductContainer,
  QuantityContainer,
  ButtonAddContainer,
  RemoveContainer,
  ValueCoffeContainer,
} from './styles'
import { coffes } from '../../Home/Components/OurCoffes/Coffes'
import { Minus, Plus, Trash } from 'phosphor-react'

const coffesOnChart = coffes.filter((coffe) => {
  return coffe.id === 1 || coffe.id === 2
})

export function ChartPaymentContainer() {
  return (
    <ChartContainer>
      {coffesOnChart.map((cofe) => {
        return (
          <ProductContainer key={cofe.id}>
            <img src={cofe.src} alt={cofe.name} />
            <div>
              <p>{cofe.name}</p>
              <QuantityContainer>
                <ButtonAddContainer>
                  <button type="button">
                    <Minus size={17} color="#8047F8" />
                  </button>

                  <p>1</p>

                  <button type="button">
                    <Plus size={17} color="#8047F8" />
                  </button>
                </ButtonAddContainer>
                <RemoveContainer type="button">
                  <Trash size={17} color="#8047F8" />
                  REMOVER
                </RemoveContainer>
                <ValueCoffeContainer>
                  <p>R$ 9,90</p>
                </ValueCoffeContainer>
              </QuantityContainer>
            </div>
          </ProductContainer>
        )
      })}
      <PriceValueContainer>
        <div>
          <p>Total de Itens</p>
          <p>R$ 29,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <h1>Total</h1>
          <h1>R$ 33,20</h1>
        </div>
        <ConfirmOrderContainer type="button">
          CONFIRMAR PEDIDO
        </ConfirmOrderContainer>
      </PriceValueContainer>
    </ChartContainer>
  )
}
