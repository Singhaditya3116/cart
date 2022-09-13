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

  handleIncreaseQuantity = (product)=>{
    console.log("Product plus clicked ",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    products[index].quantity+=1;
    this.setState({
      products:products
    })
  }

  handleDecreaseQuantity = (product)=>{
    console.log("Decrease quantity of product :",product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].quantity === 0){
      return;
    }
    products[index].quantity-=1;

    this.setState({
      products:products
    })
  }

  handleDeleteItem = (id)=>{
    console.log("Delete Clicked ",id);
    const {products} = this.state;
    
    const newProductsArray = products.filter((element)=> element.id!==id);

    this.setState({
      products:newProductsArray
    })
  }

  render(){
    console.log("Cart List Render");
    const products = this.state.products;
    return(
      <div className="cart">
        {products.map((product)=>{
          return <CartItem 
          product={product} 
          key={product.id} 
          onIncreaseQuantity ={this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteItem}
          />
        })}
      </div>
    );
  }
}

export default CartList;