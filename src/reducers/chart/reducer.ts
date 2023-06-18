export interface Product {
  id: number
  src: string
  name: string
  content: string
  title: string[]
}

export interface Chart extends Product {
  quantity?: number
}

interface ChartState {
  products: Product[]
  chart: Chart[]
}

export function chartReducer(state: ChartState, action: any) {
  return 'ainda teste'
}
