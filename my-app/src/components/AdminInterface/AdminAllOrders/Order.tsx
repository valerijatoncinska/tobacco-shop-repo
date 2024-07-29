import type { FC } from "react";

interface IProps {
  order: {
    id: number;
    productName: string;
    orderDate: string;
    orderStatus: string;
    quantity: number;
    price: number;
  };
}

const Order: FC<IProps> = ({
  order: { productName, orderDate, orderStatus, quantity, price },
}) => {
  return (
    <div className="view-order d-flex justify-content-between">
      <p>{productName}</p>
      <p>{orderDate}</p>
      <p>{orderStatus}</p>
      <p>{quantity}</p>
      <p>{price} €</p>
      <p>{quantity * price} €</p>
    </div>
  );
}

export default Order;
