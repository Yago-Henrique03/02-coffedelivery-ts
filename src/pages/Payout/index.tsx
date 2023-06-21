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
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChartContext } from '../../contexts/ChartAndCoffes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Payout() {
  const {
    products,
    setAddQuantity,
    removeQuantity,
    removeFromChart,
    addUserLocation,
  } = useContext(ChartContext)

  // valores do carrinho
  const itensOnChart = products.filter((product) => product.isOnChart === true)
  const totalPrice = itensOnChart.reduce((acc, currentItem) => {
    const subtotal = currentItem.price * currentItem.quantity
    return acc + subtotal
  }, 0)
  const entrega = 3.5
  const totalWithSend = totalPrice + entrega

  // validação de formulário
  const newUserLocationValidation = zod.object({
    CEP: zod.number().min(8, 'Informe um CEP válido'),
    STREET: zod.string().min(5, 'Informe uma Rua válida'),
    RESNUMBER: zod.number().min(1, 'Informe o número da residência'),
    COMPLEMENT: zod.string(),
    BAIRRO: zod.string().min(1, 'Informe o seu Bairro'),
    CITY: zod.string().min(1, 'Informe sua cidade'),
    UF: zod.string().min(1, 'Informe seu estado'),
  })

  type NewUserLocation = zod.infer<typeof newUserLocationValidation>

  const { register, handleSubmit, watch, setValue } = useForm<NewUserLocation>({
    resolver: zodResolver(newUserLocationValidation),
  })

  const navigate = useNavigate()

  function handleAddLocationHouse(data: any) {
    addUserLocation(data)
    navigate('/Completedbuy')
  }

  const cep = watch('CEP')

  // useEffect puxa CEP digitado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const newData = await resp.json()
        setValue('STREET', newData.logradouro)
        setValue('BAIRRO', newData.bairro)
        setValue('CITY', newData.localidade)
        setValue('UF', newData.uf)
      } catch (error) {}
    }

    fetchData()
  }, [cep, setValue])

  return (
    <PayoutContainer onSubmit={handleSubmit(handleAddLocationHouse)}>
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
              <CepContainer
                type="number"
                placeholder="CEP"
                {...register('CEP', {
                  valueAsNumber: true,
                })}
              />
            </div>
            <div>
              <RuaContainer
                type="text"
                placeholder="Rua"
                {...register('STREET')}
              />
            </div>
            <div>
              <NumberContainer
                type="number"
                placeholder="Número"
                {...register('RESNUMBER', {
                  valueAsNumber: true,
                })}
              />
              <ComplementContainer
                type="text"
                placeholder="Complemento"
                {...register('COMPLEMENT')}
              />
            </div>
            <div>
              <BairroContainer
                type="text"
                placeholder="Bairro"
                {...register('BAIRRO')}
              />
              <CityContainer
                type="text"
                placeholder="Cidade"
                {...register('CITY')}
              />
              <EstadoContainer
                type="text"
                placeholder="UF"
                {...register('UF')}
              />
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
            <ConfirmOrderContainer
              type="submit"
              disabled={!itensOnChart.length || !cep}
            >
              CONFIRMAR PEDIDO
            </ConfirmOrderContainer>
          </PriceValueContainer>
        </ChartContainer>
      </aside>
    </PayoutContainer>
  )
}
