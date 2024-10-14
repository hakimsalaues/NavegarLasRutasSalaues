import React, { useState } from 'react';

const ProductPage = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'pez de lago', price: 10 },
    { id: 2, name: 'pez de acuario dulce', price: 20 },
    { id: 3, name: 'pez marino', price: 30 },
  ];

  const [quantities, setQuantities] = useState(products.map(() => 0));

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handlePurchase = () => {
    const totalProducts = quantities.reduce((acc, qty) => acc + qty, 0);
    if (totalProducts > 0) {
      alert(`Se agregaron ${totalProducts} productos a la compra , RECUERDA HACER CLICK EN EL CARRO PARA CONFIRMAR LA COMRPA`);
      setQuantities(products.map(() => 0));  
      addToCart(totalProducts);  
    } else {
      alert("No has agregado productos.");
    }
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={product.id} className="product-box">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <div className="quantity-controls">
            <button onClick={() => decrement(index)}>-</button>
            <span>{quantities[index]}</span>
            <button onClick={() => increment(index)}>+</button>
          </div>
        </div>
      ))}
      <button onClick={handlePurchase}>Listo</button>
    </div>
  );
};

export default ProductPage;