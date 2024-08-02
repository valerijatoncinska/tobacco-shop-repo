import React, { useState } from 'react';
import EditProductItem from './EditProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';

const EditProductPage: React.FC = () => {
  const [name, setName] = useState('Product A');
  const [price, setPrice] = useState(30);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product);

  const handleUpdate = () => {
    // Логика обновления продукта
    console.log({ name, price });
  };

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductItem name={name} setName={setName} price={price} setPrice={setPrice} />
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
};

export default EditProductPage;