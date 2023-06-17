import { ShoppingCart, MapPin } from 'phosphor-react'
import logoCoffe from '../assets/logo-coffe.svg'
import { ChartContainer, CityContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <div>
        <CityContainer>
          <a href="/payout">
            <MapPin size={22} color="#8047F8" weight="fill" />
            <p>Franca, SP</p>
          </a>
        </CityContainer>
        <ChartContainer>
          <a href="/payout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </a>
        </ChartContainer>
      </div>
    </HeaderContainer>
  )
}
