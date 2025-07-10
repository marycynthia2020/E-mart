import { Route, Routes } from "react-router"
import CartView from "./Pages/CartView"
import ShoppingCart from "./Pages/ShoppingCart"
import Home from "./Pages/Home"
import PageLayout from "./Components/Layout/PageLayout"
import PaymentModal from "./Components/PaymentModal"
import { useState } from "react"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className="w-full min-h-screen">
      {isModalOpen && <PaymentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
      {isModalOpen && <div className="absolute inset-0 z-[900] bg-black opacity-75" onClick={()=> setIsModalOpen(false)}></div>}
      <Routes>
        <Route element={<PageLayout isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}>
          <Route path="/" element={<Home />} />
          <Route path="shoppingcart" element={<ShoppingCart isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />} />
          <Route path="productdetails/:id" element={<CartView setIsModalOpen={setIsModalOpen} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
