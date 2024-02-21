 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Cartview(){
    const cart=JSON.parse(sessionStorage.getItem('cart'))||[];
    const navigate=useNavigate()
    const goToProduct = () => {
        navigate('/');
    }
    let sum=0;
    let sumQuantity=0;
    for(let i=0;i<cart.length;i++){
        sum+=(cart[i].price*cart[i].quantity);
        sumQuantity+=cart[i].quantity;
    }
    const clearCart = () => {
        sessionStorage.removeItem('cart');
        window.location.reload();
    };
    const decreaseCartQuantity = (productId) => {
        const DeletingProductIndex=cart.findIndex(item => item.id===productId);
        if(DeletingProductIndex!==-1){
            cart[DeletingProductIndex].quantity--;
            if(cart[DeletingProductIndex].quantity===0){
                cart.splice(DeletingProductIndex,1);
            }
        }
        sessionStorage.setItem('cart',JSON.stringify(cart));
        window.location.reload();
    }
    const increaseProductQuantity = (productId)=>{
        const increaseProductIndex=cart.findIndex(item => item.id===productId);
        if(increaseProductIndex!==-1){
            cart[increaseProductIndex].quantity++;
        }
        sessionStorage.setItem('cart',JSON.stringify(cart));
        window.location.reload();
    };
    return(
       <div>
            <h2>Product Screen</h2>
            <div>
                <button onClick={goToProduct}>Product site</button>
            </div>
            <div>
                <button>Go to cart</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price*product.quantity}</td>
                            <td>
                            <button onClick={() => increaseProductQuantity(product.id)}>+</button>
                            <button onClick={() => decreaseCartQuantity(product.id)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                Total cost: {sum}$ <br></br>
                Total product: {sumQuantity}
            </div>
            <div>
                <button onClick={clearCart}>Clear</button>
            </div>
        </div>
    );
}
export default Cartview