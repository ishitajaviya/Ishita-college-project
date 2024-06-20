import React, { useState } from 'react';
 import './style.css';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'MAKE YOUR OWN PERFUME KIT (IN A BOX)', price: 5530 },
    { id: 2, name: 'DISCOVERY PACK ATTARS', price: 1500 }
  ]);

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>CART</h2>
      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={`https://cdn.shopify.com/s/files/1/1036/0119/files/3_541d6b22-9e15-45ef-af26-492dfa3f5536.png?v=1701070254&width=140_${item.id}.jpg`} alt={item.name} />
          <div className="item-details">
            <p>{item.name}</p>
            <p>Rs. {item.price.toFixed(2)}</p>
          </div>
          <button onClick={() => removeItem(item.id)} className='remove-btns'>Remove</button>
        </div>
      ))}
      <div className="total">
        <p>Total:</p>
        <p>Rs. {totalPrice.toFixed(2)}</p>
      </div>
      <button className="checkout-btn">CHECKOUT - Rs. {totalPrice.toFixed(2)}</button>
    </div>
  );
}

export default Cart;
