import React from 'react';
import useCards from '../../Hooks/useCarts';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
            const [products,setProducts]=useProducts()
        const [cart,setCart]= useCards(products)

            const handleRemoveProduct = product=>{
                const rest=cart.filter(pd=>pd.id!==product.id);
                setCart(rest);
                removeFromDb(product.id)
            }
        return (
                <div className="shop-container">

                        <div className="review-item-container">
                        {
                            cart.map(product =><ReviewItem key={product.id}
                                 product={product}
                                 handleRemoveProduct={handleRemoveProduct}
                                 ></ReviewItem>)
                        }           
                        </div> 
                        <div className="cart-Summary">

                        <Card cart={cart}></Card>
                        </div>
                            
                </div>
        );
};

export default Orders;