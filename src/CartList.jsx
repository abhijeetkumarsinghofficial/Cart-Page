import React from "react";
import Cart from './Cart';
// class CartList extends React.Component{

const CartList =(props)=>{
// render(){
        const {products} = props;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <Cart
                    product={product}
                    key = {product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteQuantity={props.onDeleteQuantity}
                    />
                })}
            </div>
        );
    // }

}

export default CartList;