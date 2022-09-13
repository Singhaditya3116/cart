import React from 'react'

class CartItem extends React.Component{
  constructor(){
    super();
    this.state={
      img:"",
      title:"Iqoo 9se",
      price:34000,
      quantity:10
    }
  }

  increaseQuantity = ()=> {
    
    //this.state.quantity++;    this will not reflect in UI as react will not re -render it.
    //we have to tell the react to re-render the changes that we have made. set State re-render implicitly.

    // One way
   /* this.setState({
      quantity: this.state.quantity + 1
    })
    */

    //second way   -- if previous state required use  this.
    this.setState((prevState) => {
      
      return {
        quantity:prevState.quantity+1
      }
    })

    //console.log(this.state);
  }

  decreaseQuantity = () =>{

    if(this.state.quantity ===0){
      return;
    }

    this.setState((prevState) =>{
      return{
        quantity:prevState.quantity-1
      }
    })
  }

  render(){
    const {title,price,quantity} = this.state;

    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img alt='hello' src='../public/logo192.png'></img>
        </div>
        <div className='right-block'>
          <h4>{title}</h4>
          <div className='price'>Rs {price}</div>
          <div className='quantity'>Qty: {quantity}</div>
          <div className='action-items'>
            {/* Buttons */}
            <img alt="increase" src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png' onClick = {this.increaseQuantity}></img>
            <img alt="decrease" src='https://cdn-icons-png.flaticon.com/512/56/56889.png' onClick = {this.decreaseQuantity}></img>
            <img alt="delete" src='https://cdn-icons-png.flaticon.com/512/484/484611.png'></img>
          </div>

        </div>
      </div>
    );
  }
}

export default CartItem;