import React from "react";
import CartList from "./CartList"
import Navbar from "./Navbar"
import Footer from "./Footer"


class App extends React.Component {

  constructor(){
    super();
    this.state={
      products:[
        {
          id:1,
          img:"https://m.media-amazon.com/images/I/618gFHEnXUL._SL1200_.jpg",
          title:"Iqoo 9se",
          price:34000,
          quantity:2
        },
        {
          id:2,
          img:"https://oasis.opstatics.com/content/dam/oasis/page/events/ovaltine/in/OnePlusWatch.png",
          title:"Oneplus Smartwatch",
          price:5000,
          quantity:5
          },
        {
          id:3,
          img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207",
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

  productCount = ()=>{
    const {products} = this.state;

    let count = 0;
    for(let i=0;i<products.length;i++){
      count+=(products[i].quantity);
    }
    return count;
  }

  getTotalPrice = ()=>{
    const {products} = this.state;
    let totalPrice = 0;
    for(let i=0;i<products.length;i++){
      totalPrice+=(products[i].quantity * products[i].price);
    }
    return totalPrice;
  }

  render(){
    const {products} = this.state;

  return (
    <div className="App">
      <Navbar
      productCount = {this.productCount()}
      />
      <CartList
      onIncreaseQuantity ={this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteItem={this.handleDeleteItem}
      products = {products}
      />
      <Footer
      totalPrice = {this.getTotalPrice()}
      />
    </div>
  );
  }
}

export default App;
