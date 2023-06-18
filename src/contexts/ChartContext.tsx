import { ReactNode, createContext, useReducer } from 'react'
import { coffes } from '../pages/Home/Components/OurCoffes/Coffes'
import { Chart, Product, chartReducer } from '../reducers/chart/reducer'

interface ChartContextType {
  products: Product[]
  chart: Chart[]
}

export const ChartContext = createContext({} as ChartContextType)

interface ChartContextProviderProps {
  children: ReactNode
}

export function ChartContextProvider({ children }: ChartContextProviderProps) {
  const [chartState, dispatch] = useReducer(
    chartReducer,
    {
      products: [...coffes],
      chart: [],
    },
    [],
  )

  const [products, chart] = chartState

  return (
    <ChartContext.Provider value={{ products, chart }}>
      {children}
    </ChartContext.Provider>
  )
}
