import { CoffeContainer, CoffesContainer, OurCoffesContainer } from './styles'
import { coffes } from './Coffes'

export function OurCoffes() {
  return (
    <OurCoffesContainer>
      <h1>Nossos cafés</h1>
      <CoffesContainer>
        {coffes.map((coffe) => {
          return (
            <CoffeContainer key={coffe.name}>
              <img src={coffe.src} alt="" />
              <h2>{coffe.name}</h2>
              {coffe.title.map((title) => {
                return <p key={title.length}>{title}</p>
              })}
            </CoffeContainer>
          )
        })}
      </CoffesContainer>
    </OurCoffesContainer>
  )
}
