import React from "react"
import { Route, Routes } from "react-router-dom"
import OrderPage from "./components/OrderPage/OrderPage"
import AddProductForm from "./components/AddProductForm/AddProductForm"
import CheckoutPage from "./components/CheckoutPage/CheckoutPage"
import EditProductPage from "./components/EditProductPage/EditProductPage"
import AllOrdersPage from "./components/AdminInterface/AdminAllOrders/AllOrdersPage"
import AdminLayout from "./components/AdminInterface/Layout/AdminLayout"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/products/new" element={<AddProductForm />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/edit/:id" element={<EditProductPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AllOrdersPage />} />{" "}
        </Route>
      </Routes>
    </div>
  )
}

export default App
