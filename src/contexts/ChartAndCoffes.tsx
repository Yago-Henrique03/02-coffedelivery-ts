import coffe from '../assets/ImgCoffes/ExpressoAmericano.svg'
import coffe2 from '../assets/ImgCoffes/ExpressoCremoso.svg'
import coffe3 from '../assets/ImgCoffes/ExpressoGelado.svg'
import coffe4 from '../assets/ImgCoffes/ExpressoTradicional.svg'
import coffe5 from '../assets/ImgCoffes/CafeComLeite.svg'
import coffe6 from '../assets/ImgCoffes/Latte.svg'
import coffe7 from '../assets/ImgCoffes/Capuccino.svg'
import coffe8 from '../assets/ImgCoffes/Macchiato.svg'
import coffe9 from '../assets/ImgCoffes/Mocaccino.svg'
import coffe10 from '../assets/ImgCoffes/ChocolateQuente.svg'
import coffe11 from '../assets/ImgCoffes/Cubano.svg'
import coffe12 from '../assets/ImgCoffes/Havaiano.svg'
import coffe13 from '../assets/ImgCoffes/Arabe.svg'
import coffe14 from '../assets/ImgCoffes/Irlandes.svg'

import { ReactNode, createContext, useState } from 'react'

export const coffes = [
  {
    id: 1,
    src: coffe4,
    name: 'Expresso Tradicional',
    content: 'O tradicional café feito com água quente e grãos moídos',
    title: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    src: coffe,
    name: 'Expresso Americano',
    content: 'Expresso diluído, menos intenso que o tradicional',
    title: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    src: coffe2,
    name: 'Expresso Cremoso',
    content: 'Café expresso tradicional com espuma cremosa',
    title: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    src: coffe3,
    name: 'Expresso Gelado',
    content: 'Bebida preparada com café expresso e cubos de gelo',
    title: ['Tradicional', 'Gelado'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 5,
    src: coffe5,
    name: 'Cafe com Leite',
    content: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    src: coffe6,
    name: 'Latte',
    content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    src: coffe7,
    name: 'Capuccino',
    content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    src: coffe8,
    name: 'Macchiato',
    content: 'Café expresso misturado com um pouco de leite quente e espuma',
    title: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    src: coffe9,
    name: 'Mocaccino',
    content: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    src: coffe10,
    name: 'Chocolate Quente',
    content: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: ['Especial', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    src: coffe11,
    name: 'Cubano',
    content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    src: coffe12,
    name: 'Havaiano',
    content: 'Bebida adocicada preparada com café e leite de coco',
    title: ['Especial'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    src: coffe13,
    name: 'Árabe',
    content: 'Bebida preparada com grãos de café árabe e especiarias',
    title: ['Especial'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    src: coffe14,
    name: 'Irlandês',
    content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: ['Especial', 'Alcoólico'],
    price: 9.9,
    quantity: 1,
  },
]

interface Product {
  id: number
  src: string
  name: string
  content: string
  title: string[]
  price: number
  quantity: number
  isOnChart?: boolean
}

interface ChartContextType {
  products: Product[]
  setAddQuantity: (id: number) => void
  removeQuantity: (id: number) => void
  addToChart: (id: number) => void
  removeFromChart: (id: number) => void
}

export const ChartContext = createContext({} as ChartContextType)

interface ChartContextProviderProps {
  children: ReactNode
}

export function ChartContextProvider({ children }: ChartContextProviderProps) {
  const [products, setProducts] = useState([...coffes])
  function setAddQuantity(id: number) {
    setProducts((state) =>
      state.map((product) => {
        if (product.id === id) {
          const oldQuantity = product.quantity
          return { ...product, quantity: oldQuantity + 1 }
        } else {
          return { ...product }
        }
      }),
    )
  }

  function removeQuantity(id: number) {
    setProducts((state) =>
      state.map((product) => {
        if (product.id === id) {
          const oldQuantity = product.quantity
          if (oldQuantity === 1) {
            console.log(`Você não pode remover mais no ${product.name}`)
            return { ...product }
          } else {
            return { ...product, quantity: oldQuantity - 1 }
          }
        } else {
          return { ...product }
        }
      }),
    )
  }

  function addToChart(id: number) {
    console.log('item adicionado ao carrinho')
    setProducts((state) =>
      state.map((product) =>
        product.id === id ? { ...product, isOnChart: true } : { ...product },
      ),
    )
  }

  function removeFromChart(id: number) {
    setProducts((state) =>
      state.map((product) =>
        product.id === id ? { ...product, isOnChart: false } : { ...product },
      ),
    )
  }

  return (
    <ChartContext.Provider
      value={{
        products,
        setAddQuantity,
        removeQuantity,
        addToChart,
        removeFromChart,
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}
