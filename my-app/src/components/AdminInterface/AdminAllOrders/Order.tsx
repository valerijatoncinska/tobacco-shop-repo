import type { FC } from "react"

interface IProps {
  order: {
    id: number
    product: string
    quantity: number
    price: number
    date?: string
    status?: string
  }
}

const Order: FC<IProps> = ({
  order: { product, date, status, quantity, price },
}) => {
  return (
    <div className="view-order d-flex justify-content-between">
      <p>{product}</p>
      <p>{date}</p>
      <p>{status}</p>
      <p>{price} €</p>
      <p>{quantity}</p>
      <p>{quantity * price} €</p>
    </div>
  )
}

export default Order
