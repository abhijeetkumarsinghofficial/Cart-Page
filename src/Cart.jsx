import React from 'react';
import img from './shoe.jpeg';


class Cart extends React.Component {
    constructor(){
        super();
        this.state={
           price:993,
           title:'Phone', 
           qty:1,
           img:''
        }}
  render() {
      // object destructuring
      const {price,title,qty} = this.state;
    return (


      <div className='cart-item' >
        <h1>Cart</h1>
        <div className="left-block">
            <img style={styles.image} />
            
        </div>
        <div className="right-block">
            <div style={{fontSize:45}} > {this.state.title} </div>
            <div style ={{color:'#777'}}> {price} </div>
            <div style ={{color:'#777'}} >Qty: {qty}</div>

        </div>

        <div className="cart-item-actions"> 
        <img alt="inc" className='action-items' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"/>
        <img alt="dec" className='action-items' src="https://cdn-icons-png.flaticon.com/512/9068/9068779.png"/>
        <img alt="rem" className='action-items' src="https://cdn-icons-png.flaticon.com/512/9221/9221441.png"/>

        </div>
      </div>
    );
  }
}

 const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4 ,
        background:'#ccc'
    }
 }

export default Cart;