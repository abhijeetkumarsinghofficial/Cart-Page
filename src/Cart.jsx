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

        increaseQuantity=()=>{
            // this.state.qty= this.state.qty+1;
            console.log("Clicked",this.state);
            //increasing the quantity mehtod 1
            // this.setState({qty:this.state.qty+1});

            //increasing the quantity mehtod 2, use when previous state is required
            this.setState((prev)=>{
                return{qty:prev.qty+1}
            });
        }

        decreaseQuantity=()=>{
            // using destructuring
            const {qty} = this.state;
            console.log(qty);
            if(qty!==0){

            this.setState({
                
                qty:this.state.qty-1
            });
            }
        
        }
  render() {
      // object destructuring
      const {price,title,qty} = this.state;
    return (


      <div className='cart-item' >
        <div className="left-block">
            <img style={styles.image} />
        </div>
        <div className="right-block">
            <div style={{fontSize:40}} > {this.state.title} </div>
            <div style ={{color:'#777'}}> {price} </div>
            <div style ={{color:'#777'}} >Qty: {qty}</div>

        <div className="cart-item-actions"> 
        <img alt="inc" className='action-items' src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" onClick={this.increaseQuantity} />
        <img alt="dec" className='action-items' src="https://cdn-icons-png.flaticon.com/512/9068/9068779.png" onClick={this.decreaseQuantity}/>
        <img alt="rem" className='action-items' src="https://cdn-icons-png.flaticon.com/512/9221/9221441.png"/>
        </div>
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