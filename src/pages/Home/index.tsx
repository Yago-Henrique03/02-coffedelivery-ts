import {
  BannerContainer,
  BoxTitleContainer,
  ControlBoxContainer,
  HomeContainer,
  TitleBannerContainer,
} from './styles'
import bannerHome from '../../assets/bannerHome.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <TitleBannerContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BoxTitleContainer>
            <ControlBoxContainer>
              <div>
                <div>
                  <ShoppingCart size={16} weight="fill" color="#FAFAFA" />
                </div>
                <p>Compra Simples e segura</p>
              </div>
              <div>
                <div>
                  <Package size={16} weight="fill" color="#FAFAFA" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
            </ControlBoxContainer>
            <ControlBoxContainer>
              <div>
                <div>
                  <Timer size={16} weight="fill" color="#FAFAFA" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>

              <div>
                <div>
                  <Coffee size={16} weight="fill" color="#FAFAFA" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </ControlBoxContainer>
          </BoxTitleContainer>
        </TitleBannerContainer>
        <img src={bannerHome} alt="" />
      </BannerContainer>
    </HomeContainer>
  )
}
