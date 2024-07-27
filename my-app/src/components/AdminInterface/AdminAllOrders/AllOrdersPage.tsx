import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Order from "./Order"

const AllOrdersPage = () => {
  const orders = [
    {
      id: 1,
      productName: "Tobacco",
      orderDate: "21.09.2023",
      orderStatus: "Good",
      quantity: 2,
      price: 300,
    },
    {
      id: 1,
      productName: "Tobacco",
      orderDate: "21.09.2023",
      orderStatus: "Good",
      quantity: 2,
      price: 300,
    },
    {
      id: 1,
      productName: "Tobacco",
      orderDate: "21.09.2023",
      orderStatus: "Good",
      quantity: 2,
      price: 300,
    },
    // Add more orders as needed
  ]

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0)
  const totalCost = orders.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0,
  )

  return (
    <div className="order-table-container">
      <div className="container">
        <h2 className="text-center">View orders</h2>
        <table className="table">
          <div>
            <div className="d-flex justify-content-between">
              <h2>Product name</h2>
              <h2>Date</h2>
              <h2>Order status</h2>
              <h2>Total quantity</h2>
              <h2>Price</h2>
              <h2>Total cost</h2>
            </div>
          </div>
          <div className="order-inside">
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
