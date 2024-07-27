import Order from "./Order"

const AllOrdersPage = () => {
  const orders = [
    {
      id: 1,
      productName: "Product A",
      orderDate: "date",
      orderStatus: "Good",
      quantity: 2,
      price: 30,
    },
    {
      id: 2,
      productName: "Product B",
      orderDate: "date 2",
      orderStatus: "Good",
      quantity: 2,
      price: 30,
    },
  ]

  return (
    <>
      <div>
        <h1>View Orders</h1>
        <h2>Product Name</h2>
        <h2>Data</h2>
        <h2>Order Status</h2>
        <h2>Total quantity</h2>
        <h2>Price</h2>
        <h2>Total cost</h2>
        <div>
          {orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
      <div>
        <span>Total quantity: {orders.length - 1}</span>
        <span>
          Total cost:
          {orders
            .map(order => order.price * order.quantity)
            .reduce((totalCost, costOneOrder) => totalCost + costOneOrder)}
        </span>
      </div>
    </>
  )
}

export default AllOrdersPage
