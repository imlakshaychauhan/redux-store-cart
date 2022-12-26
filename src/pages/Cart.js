import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const removeItem = (id) => {
    dispatch(remove(id));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cardWrapper'>
        {
          products.map((product) => (
            <div className='cartCard' >
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => removeItem(product.id)} >Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart