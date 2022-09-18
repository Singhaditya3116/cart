import React from "react";
import CartList from "./CartList"
import Navbar from "./Navbar"
import Footer from "./Footer"
import  firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


class App extends React.Component {

  constructor(){
    super();
    this.state={
      products:[],
      loading:true
    }
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot)=>{
    //     //console.log("snaps :",snapshot);

    //     const products = snapshot.docs.map((doc)=>{
    //       console.log("doc data :",doc.data());
    //       const data = doc.data();
    //       data.id = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products:products,
    //       loading:false
    //     })

    //   })

    firebase
    .firestore()
    .collection("products")
    .onSnapshot((snapshot)=>{
      //console.log("snaps :",snapshot);

      const products = snapshot.docs.map((doc)=>{
        console.log("doc data :",doc.data());
        const data = doc.data();
        data.id = doc.id;
        return data;
      })
      //console.log("Component Did Mounted");

      this.setState({
        products:products,
        loading:false
      })

    })

  }

  handleIncreaseQuantity = (product)=>{
    console.log("Product plus clicked ",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    console.log("Index :",index);

    // products[index].quantity+=1;
    // this.setState({
    //   products:products
    // })

    const docRef = firebase.firestore().collection("products").doc(products[index].id);
    //console.log(docRef);

    docRef
      .update({
        quantity:products[index].quantity+1
      })
      .then(()=>{
        console.log("Product Updated to firebase");
      })
      .catch((err)=>{
        console.log("Error occured :",err);
      })

  }

  handleDecreaseQuantity = (product)=>{
    console.log("Decrease quantity of product :",product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].quantity === 0){
      return;
    }
    // products[index].quantity-=1;

    // this.setState({
    //   products:products
    // })
    

    const docRef = firebase.firestore().collection("products").doc(products[index].id);
    //console.log(docRef);
    docRef
      .update({
        quantity:products[index].quantity-1
      })
      .then(()=>{
        console.log("Product Updated to firebase");
      })
      .catch((err)=>{
        console.log("Error occured :",err);
      })
  }

  handleDeleteItem = (id)=>{
    console.log("Delete Clicked ",id);
    const {products} = this.state;
    
    // const newProductsArray = products.filter((element)=> element.id!==id);

    // this.setState({
    //   products:newProductsArray
    // })

    const docRef = firebase.firestore().collection("products").doc(id);
    //console.log(docRef);
    docRef
      .delete()
      .then(()=>{
        console.log("Product Deleted Successfully");
      })
      .catch((err)=>{
        console.log("Error occured :",err);
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

  addProduct = () =>{
    firebase
      .firestore()
      .collection("products")
      .add({
        img:"",
        title:"Washing MAchine",
        price:10000,
        quantity:1
      })
      .then((docRef)=>{
        console.log("New Doc Added :",docRef);
      })
      .catch((err)=>{
        console.log("Error occured :",err);
      })
  }

  render(){
    const {products,loading} = this.state;

  return (
    <div className="App">
      <Navbar
      productCount = {this.productCount()}
      />
      {/* <button className="add-product-btn" onClick={this.addProduct}>Add a product</button> */}
      <CartList
      onIncreaseQuantity ={this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteItem={this.handleDeleteItem}
      products = {products}
      />
      {loading && <h2>Loading Products ...</h2>}
      <Footer
      totalPrice = {this.getTotalPrice()}
      />
    </div>
  );
  }
}

export default App;
