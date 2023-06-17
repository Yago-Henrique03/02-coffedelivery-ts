import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Payout } from './pages/Payout/index'
import { CompletedBuy } from './pages/CompletedBuy'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/completedbuy" element={<CompletedBuy />} />
      </Route>
    </Routes>
  )
}
