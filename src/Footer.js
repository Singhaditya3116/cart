import React from "react"

const Footer = (props) =>{

  return(
    <div>
      <h3 className="totalPrice">Total : {props.totalPrice}</h3>
    </div>
  );

}

export default Footer;