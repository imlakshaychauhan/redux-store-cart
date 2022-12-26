import React, { useState, useEffect }  from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    // const [products, setProducts] = useState([]);
    const {data: products, status} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     await fetch("https://fakestoreapi.com/products")
        //     .then((response) => response.json())
        //     .then((data) => { 
        //         console.log(data)
        //         setProducts(data);
        //     });
        // }
        // fetchProducts();
    }, []);
    const addProduct = (product) => {
        dispatch(add(product));
    }
    if(status === STATUSES.LOADING)
        return <h2 style={{ textAlign: 'center' }}>Loading....</h2>
    if(status === STATUSES.ERROR)
        return <h2 style={{ textAlign: 'center' }}>Something Went Wrong !</h2>
  return (
    <div className='productsWrapper'>{
        products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>$ {product.price}</h5>
                <button onClick={() => addProduct(product)}  className='btn'>Add to Cart</button>
            </div>
        ))
    }</div>
  )
}

export default Products