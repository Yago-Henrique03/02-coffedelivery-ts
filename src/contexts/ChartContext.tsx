import { ReactNode, createContext, useReducer } from 'react'

interface ChartContextType {}

export const ChartContext = createContext({} as ChartContextType)

interface Product {
  id: string
  name: string
  content: string
  title: string[]
}

interface ChartContextProviderProps {
  children: ReactNode
  products: Product[]
}

export function ChartContextProvider({ children }: ChartContextProviderProps) {
  const [chartState, dispatch] = useReducer(
    {
      products: [],
      chart: [],
    },
    [],
  )

  return <ChartContext.Provider value={}>{children}</ChartContext.Provider>
}
