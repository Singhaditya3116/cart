import React from 'react'
import CartItem from './CartItem';

class CartList extends React.Component{

  constructor(){
    super();
    this.state={
      products:[
        {
          id:1,
        img:"",
        title:"Iqoo 9se",
        price:34000,
        quantity:10
        },
        {
          id:2,
          img:"",
          title:"Oneplus Smartwatch",
          price:5000,
          quantity:100
          },
        {
          id:3,
          img:"",
          title:"MacBook ",
          price:20000,
          quantity:5
        }
      ]
    }
  }

  render(){
    console.log("Cart List Render");
    const products = this.state.products;
    return(
      <div className="cart">
        {products.map((product)=>{
          return <CartItem product={product} key={product.id} />
        })}
      </div>
    );
  }
}

export default CartList;