import { useState } from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
function ShoppingCart(){
    const[ products , setProducts]=useState([
        {id:0,name:'iphone5',price:500,quantity:0},
        {id:1,name:'iphone4',price:400,quantity:0},
        {id:2,name:'iphone3',price:100,quantity:0},
    ]);
    const navigate=useNavigate();


    const addToCart = (productId,productName,productPrice) => {
        const cart=JSON.parse(sessionStorage.getItem('cart'))||[];
        
        const productToAdd={id:productId,name:productName,price:productPrice,quantity:1};
        const existedProductIndex=cart.findIndex(item => item.id===productId);
        if(existedProductIndex!==-1){
            cart[existedProductIndex].quantity++;
        }
        else{
            cart.push(productToAdd);
        }
        
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    const goToCart = () => {
        navigate("/cart");
    };

    return(
        <div>
            <h2>Product Screen</h2>
            <div>
                <button onClick={goToCart}>Go to cart</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => addToCart(product.id,product.name,product.price)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ShoppingCart;