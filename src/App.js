import React from 'react';
import CartList from './CartList';
import Navbar from './Navbar';
class  App extends React.Component {

  constructor(){
    super();
    this.state ={
        products:[
            {
                price:999,
                title:"Mobile",
                qty:1,
                img:'https://images.unsplash.com/photo-1546027658-7aa750153465?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                id:'1'
            },
            {
                price:87000,
                title:"Laptop",
                qty:1,
                img:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                id:'2'
            },
            {
                price:12000,
                title:"Desktop",
                qty:1,
                img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
                id:'3'
            },
            {
                price:4999,
                title:"Tablet",
                qty:1,
                img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
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

getCount=()=>{
  const {products}  =this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  }
  )  
  return count;
}
getTotal=()=>{
    const {products}  =this.state;
    let total=0;
    products.forEach((product)=>{
        total+=product.qty*product.price;
    }
    )  
    return total;
}

render(){
  const {products}= this.state;
  return (
    <div>
    <Navbar count={this.getCount()} />
    <CartList
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteQuantity={this.handleDeleteQuantity}
     />
    <div
    style={{padding:10,fontSize:20}}>Total: Rs {this.getTotal()}</div>
    </div>
  );
}
}

export default App;
