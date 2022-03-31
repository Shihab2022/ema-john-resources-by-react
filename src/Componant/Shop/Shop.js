import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, findDataAtLocalStorage } from '../../utilities/fakedb'
const Shop = () => {
const [products,setProducts]=useState([])

    const [cart,setCart]=useState([])
            useEffect(() => {
                fetch('products.json')
                .then(res=>res.json())
                .then(data=>setProducts(data))
            },[])

    

     useEffect(() => {

        const getData =findDataAtLocalStorage()
        const savedCart = [];
        for(const id in getData){
            const addProduct =products.find(product =>product.id ===id)
            // console.log(addProduct)
            if(addProduct){
                const quantity = getData[id];
                addProduct.quantity = quantity;
                savedCart.push(addProduct);
            }

        }
       
        setCart(savedCart);           
     },[products])

     const handleAddToCart = (product) =>{
      console.log(product)
        const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id)
    }

         
    return (
        <div className='shop-container'>
         <div className="all-cart-session">
             {
                 products.map(product =><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
             }           
             </div> 
             <div className="cart-Summary">
              <Card cart={cart}></Card>
                
             </div>
        </div>
    );
};

export default Shop;