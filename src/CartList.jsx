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
                    price:87000,
                    title:"Laptop",
                    qty:1,
                    img:'',
                    id:'2'
                },
                {
                    price:12000,
                    title:"Desktop",
                    qty:1,
                    img:'',
                    id:'3'
                },
                {
                    price:4999,
                    title:"Tablet",
                    qty:1,
                    img:'',
                    id:'4'
                }
            ]
        }
    }

handleIncreaseQuantity=(product)=>{
        console.log("Increase Quantity",product);
        const {products}=this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })

    }
    handleDecreaseQuantity=(product)=>{
        console.log("Increase Quantity",product);
        const {products}=this.state;
        const index = products.indexOf(product);
        if(products[index].qty==0){

            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }

        handleDeleteQuantity=(id)=>{
        const {products} =this.state;
        const items =products .filter((item)=>item.id!==id); //[{}]
        this.setState({
            products:items
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <Cart
                    product={product}
                    key = {product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteQuantity={this.handleDeleteQuantity}
                    />
                })}
            </div>
        );
    }
}

export default CartList;