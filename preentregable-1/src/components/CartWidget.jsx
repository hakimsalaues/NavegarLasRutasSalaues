import React from 'react';

const CartWidget = ({ cartCount, resetCartCount }) => {
  const handleCartClick = () => {
    if (cartCount > 0) {
      alert(`Compra realizada con éxito de ${cartCount} productos.`);
      resetCartCount();  
    } else {
      alert("No tienes productos en el carrito.");
    }
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <span className='carrito'>🛒</span>
      {cartCount > 0 && <span className='contador'>{cartCount}</span>}
    </div>
  );
};

export default CartWidget;