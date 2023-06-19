import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffes } from './Coffes'
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

export function OurCoffes() {
  return (
    <OurCoffesContainer>
      <h1>Nossos cafés</h1>
      <CoffesContainer>
        {coffes.map((coffe) => {
          return (
            <CoffeContainer key={coffe.id}>
              <img src={coffe.src} alt="" />
              <TitleContainer>
                {coffe.title.map((title) => {
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
                    <button type="button">
                      <Minus size={20} color="#8047F8" />
                    </button>
                    <p>1</p>
                    <button type="button">
                      <Plus size={20} color="#8047F8" />
                    </button>
                  </QuantityContainer>
                  <ButtonChartContainer>
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
