import { Route, Routes } from "react-router"
import CartView from "./Pages/CartView"
import ShoppingCart from "./Pages/ShoppingCart"
import Home from "./Pages/Home"
import PageLayout from "./Components/Layout/PageLayout"
import PaymentModal from "./Components/PaymentModal"

function App() {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="productdetails/:id" element={<CartView />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
