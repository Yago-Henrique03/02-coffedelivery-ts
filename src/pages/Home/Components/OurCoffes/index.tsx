import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ChartContext } from '../../../../contexts/ChartAndCoffes'
import {
  CoffeContainer,
  CoffesContainer,
  OurCoffesContainer,
  TitleContainer,
  PriceContainer,
  ValueContainer,
  QuantityContainer,
  ButtonChartContainer,
} from './styles'
import { useContext } from 'react'

export function OurCoffes() {
  const { products, setAddQuantity, removeQuantity, addToChart } =
    useContext(ChartContext)

  function handleSetAddQuantity(id: number) {
    setAddQuantity(id)
  }

  return (
    <OurCoffesContainer>
      <h1>Nossos cafés</h1>
      <CoffesContainer>
        {products.map((coffe: any) => {
          return (
            <CoffeContainer key={coffe.id}>
              <img src={coffe.src} alt="" />
              <TitleContainer>
                {coffe.title.map((title: string) => {
                  return <p key={title}>{title}</p>
                })}
              </TitleContainer>
              <h2>{coffe.name}</h2>
              <span>{coffe.content}</span>
              <PriceContainer>
                <ValueContainer>
                  <p>R$</p>
                  <h1>{coffe.price.toFixed(2).toString().replace('.', ',')}</h1>
                </ValueContainer>
                <div>
                  <QuantityContainer>
                    <button
                      type="button"
                      onClick={() => removeQuantity(coffe.id)}
                    >
                      <Minus size={20} color="#8047F8" />
                    </button>
                    <p>{coffe.quantity}</p>
                    <button
                      type="button"
                      onClick={() => handleSetAddQuantity(coffe.id)}
                    >
                      <Plus size={20} color="#8047F8" />
                    </button>
                  </QuantityContainer>
                  <ButtonChartContainer onClick={() => addToChart(coffe.id)}>
                    <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
                  </ButtonChartContainer>
                </div>
              </PriceContainer>
            </CoffeContainer>
          )
        })}
      </CoffesContainer>
    </OurCoffesContainer>
  )
}
