import { ShoppingCart, MapPin } from 'phosphor-react'
import logoCoffe from '../assets/logo-coffe.svg'
import {
  ChartContainer,
  ChartCount,
  CityContainer,
  HeaderContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ChartContext } from '../contexts/ChartAndCoffes'

export function Header() {
  const { products } = useContext(ChartContext)

  const CountItens = products.filter((product) => product.isOnChart === true)
  const CountReduce = CountItens.reduce((acc, currentItem) => {
    return acc + currentItem.quantity
  }, 0)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>
      <div>
        <CityContainer>
          <NavLink to="/payout" title="Payment">
            <MapPin size={22} color="#8047F8" weight="fill" />
            <p>Franca, SP</p>
          </NavLink>
        </CityContainer>
        <ChartContainer>
          <ChartCount>
            <p>{CountReduce}</p>
          </ChartCount>
          <NavLink to="/payout" title="Payment">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </NavLink>
        </ChartContainer>
      </div>
    </HeaderContainer>
  )
}
