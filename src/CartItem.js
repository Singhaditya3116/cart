import React from 'react'

const CartItem = (props)=> {

//  increaseQuantity = ()=> {
    
    //this.state.quantity++;    this will not reflect in UI as react will not re -render it.
    //we have to tell the react to re-render the changes that we have made. set State re-render implicitly.

    // One way
   /* this.setState({
      quantity: this.state.quantity + 1
    })
    */

    //second way   -- if previous state required use  this.
 /*   this.setState((prevState) => {
      
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
  */

    const {title,price,quantity,img} = props.product;
    console.log("Cart Item Render");
    // console.log("props:" ,this.props);
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img  src={img}/>
        </div>
        <div className='right-block'>
          <h4>{title}</h4>
          <div className='price'>Rs {price}</div>
          <div className='quantity'>Qty: {quantity}</div>
          <div className='action-items'>
            {/* Buttons */}
            <img alt="increase" src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png' onClick = {() => props.onIncreaseQuantity(props.product)}></img>
            <img alt="decrease" src='https://cdn-icons-png.flaticon.com/512/56/56889.png' onClick = {()=> props.onDecreaseQuantity(props.product)}></img>
            <img alt="delete" src='https://cdn-icons-png.flaticon.com/512/484/484611.png' onClick={()=>props.onDeleteItem(props.product.id)}></img>
          </div>

        </div>
      </div>
    );
}

export default CartItem;