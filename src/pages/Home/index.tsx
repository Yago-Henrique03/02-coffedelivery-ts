import {
  BannerContainer,
  BoxTitleContainer,
  HomeContainer,
  IconContainer,
  TitleBannerContainer,
} from './styles'
import bannerHome from '../../assets/bannerHome.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { OurCoffes } from './Components/OurCoffes'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <TitleBannerContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <BoxTitleContainer>
            <IconContainer>
              <div>
                <ShoppingCart size={16} weight="fill" color="#FAFAFA" />
              </div>
              <p>Compra Simples e segura</p>
            </IconContainer>
            <IconContainer>
              <div>
                <Package size={16} weight="fill" color="#FAFAFA" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </IconContainer>
            <IconContainer>
              <div>
                <Timer size={16} weight="fill" color="#FAFAFA" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </IconContainer>
            <IconContainer>
              <div>
                <Coffee size={16} weight="fill" color="#FAFAFA" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </IconContainer>
          </BoxTitleContainer>
        </TitleBannerContainer>
        <img src={bannerHome} alt="" />
      </BannerContainer>
      <OurCoffes />
    </HomeContainer>
  )
}
