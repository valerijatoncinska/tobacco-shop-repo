import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Order from "./Order"
import "./AllOrdersPage.css"
import { useSelector } from "react-redux"
import { RootState } from "store/store"

const AllOrdersPage = () => {
  // const orders = [
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
  //   {
  //     id: 1,
  //     productName: "Tobacco",
  //     orderDate: "21.09.2023",
  //     orderStatus: "Good",
  //     quantity: 2,
  //     price: 300,
  //   },
    
    
  //   // Add more orders as needed
  // ]

  const {orders} = useSelector((state: RootState) => state.order)

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0)
  const totalCost = orders.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0,
  )

  return (
    <div className="order-table-container p-5">
      <div className="container">
        <h2 className="text-center mb-5">View orders</h2>
        <table className="table">
            <div className="d-flex justify-content-between mb-4">
              <h5>Product name</h5>
              <h5>Date</h5>
              <h5>Order status</h5>
              <h5>Price</h5>
              <h5>Total quantity</h5>
              <h5>Total cost</h5>
            </div>
          <div className="data order-inside">
            {orders.map(order => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </table>
        <div className="order-summary">
          <p>
            Total quantity: <span>{totalQuantity}</span>
          </p>
          <p>
            Total cost: <span>{totalCost} €</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AllOrdersPage
