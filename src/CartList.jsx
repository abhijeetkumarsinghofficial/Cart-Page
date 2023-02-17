import React from "react";
import Cart from './Cart';
class CartList extends React.Component{
    constructor(){
        super();
        this.state ={
            products:[
                {
                    price:999,
                    title:"Mobile",
                    qty:1,
                    img:'',
                    id:'1'
                },
                {
                    price:999,
                    title:"Laptop",
                    qty:1,
                    img:'',
                    id:'2'
                },
                {
                    price:999,
                    title:"Desktop",
                    qty:1,
                    img:'',
                    id:'3'
                },
                {
                    price:999,
                    title:"Tablet",
                    qty:1,
                    img:'',
                    id:'4'
                }
            ]
        }
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <Cart
                    product={product}
                    key = {product.id}
                    />
                })}
            </div>
        );
    }

}

export default CartList;