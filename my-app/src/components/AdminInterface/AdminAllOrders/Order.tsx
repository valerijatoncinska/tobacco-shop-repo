import type { FC } from "react"
import { Order } from "store/redux/orderSlice"

interface IProps {
  order: Order
}

const OrderComponent: FC<IProps> = ({
  order: { product, date, status, quantity, price },
}) => {
  return (
    <div className="view-order d-flex justify-content-between">
      <p>{product}</p>
      <p>{date.toLocaleString()}</p>
      <p>{status}</p>
      <p>{price} €</p>
      <p>{quantity}</p>
      <p>{quantity * price} €</p>
    </div>
  )
}

export default OrderComponent
