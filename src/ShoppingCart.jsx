import React, { useState } from 'react';
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

const ShoppingCart = ( ) => {
  
  const products = [
    { id: 1, name: 'grapes', description: '$40',img:img1},
    { id: 2, name: 'water melon', description: '$50',img:img2 },
    { id: 3, name: 'orange', description: '$70' ,img:img3},
    

  ];

  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
  
    const isProductInCart = cart.find(item => item.id === product.id);

    if (isProductInCart) {
     
      setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    } else {
     
      setCart(prevCart => [...prevCart, product]);
    }
  };

  return (
    <div className='container'>
      <h2>Available Products</h2>
      <div className='product'>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.img} alt='img1'/>
           <li> <strong>{product.name}</strong> </li>
           <li> {product.description}</li>
            <button className='btn btn-primary' onClick={() => addToCart(product)}>
              {cart.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <p>Cart Quantity: {cart.length}</p>
      <ul className='shop'>
        {cart.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
