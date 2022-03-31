import React, {} from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb'
import useProducts from '../../Hooks/useProducts';
import useCards from '../../Hooks/useCarts';
const Shop = () => {

    // make defoult hook in modile 53-4 and use
    const [products,setProducts]=useProducts()
 const [cart,setCart]= useCards(products)

//akoi code bar bar onak jai gai use korty shoby tai akta defoult fun ay raykay takay bivinno componant thaykay  call koary use korbo

    // const [cart,setCart]=useState([])
    //         useEffect(() => {
    //             fetch('products.json')
    //             .then(res=>res.json())
    //             .then(data=>setProducts(data))
    //         },[])

    
    // const [cart,setCart]=useState([])
    // const [cart,setCart]=useState([])
    //  useEffect(() => {

    //     const getData =findDataAtLocalStorage()
    //     const savedCart = [];
    //     for(const id in getData){
    //         const addProduct =products.find(product =>product.id ===id)
    //         // console.log(addProduct)
    //         if(addProduct){
    //             const quantity = getData[id];
    //             addProduct.quantity = quantity;
    //             savedCart.push(addProduct);
    //         }

    //     }
       
    //     setCart(savedCart);           
    //  },[products])

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