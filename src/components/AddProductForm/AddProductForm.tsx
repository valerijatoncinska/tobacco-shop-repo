import React, { useState } from 'react';
import AddProductItem from './AddProductItem';

const AddProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика добавления продукта
    console.log({ name, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product Form</h1>
      <AddProductItem name={name} setName={setName} price={price} setPrice={setPrice} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
