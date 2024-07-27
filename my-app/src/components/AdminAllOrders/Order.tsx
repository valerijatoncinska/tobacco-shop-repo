import type { FC } from "react"

interface IProps {
  order: {
    id: number
    productName: string
    orderDate: string
    orderStatus: string
    quantity: number
    price: number
  }
}

const Order: FC<IProps> = ({
  order: { id, productName, orderDate, orderStatus, quantity, price },
}) => {
  return (
    <div>
      <p>{productName}</p>
      <p>{orderDate}</p>
      <p>{orderStatus}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{quantity * price}</p>
    </div>
  )
}

export default Order
