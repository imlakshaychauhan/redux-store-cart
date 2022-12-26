import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const products = useSelector((state) => state.cart);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <span className='logo'>
          <Link className='navLink' to="/" > REDUX STORE CART </Link>
        </span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className='cartCount'>Cart Items : {products.length} </span>
        </div>
    </div>
  )
}

export default Navbar