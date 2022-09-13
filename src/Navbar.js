import React from 'react'

const Navbar = (props) => {
    console.log(props);
    return ( 
       
        <div className = "nav" >
            <img src = "https://cdn-icons-png.flaticon.com/512/2838/2838838.png" /> 
            <span className = 'counter' > {props.productCount} </span> 
        </div >
    );
}


export default Navbar;