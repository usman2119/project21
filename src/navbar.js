import React, {  useRef, useState } from 'react'
import "./css/header.css"
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
    const[show,toggleshow]=useState(false)
    let menubar=useRef()
    
  return (
    <div>
        <div className="navbar-container">
        <nav className="flex">
            <div className="logo">NICKE</div>
            <ul>
                <li><a href="/">HOME</a></li>
                
                <li>
                    <a href="/products">PRODUCTS
                        {/* <i className="fa fa-caret-down"></i> */}
                    </a>
                    {/* <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">ACCESORIES</a></li>
                        <li><a href="/">SOCIAL LINKS</a></li>
                    </ul> */}
                </li>






                <li><a href="/">LOGIN/SIGNIN</a></li>
                <li><a href="/">CONTACT US</a></li>
                <li className="profile">PROFILE<i><CgProfile/></i>  </li>
                <span onClick={()=>toggleshow(!show)}><li className="menu"><i><FiMenu /></i> MENU</li></span>
            </ul>
        </nav>
       
    </div>
    {show &&
    <div className="dropdown" id="menu">
           <div className="box">
               <div className="row">
                   <div className="footer-col">
                       <h4>COMPANY</h4>
                       <ul>
                           <li><a href="/">PRIVACY POLICY</a></li>
                           <li><a href="/">ABOUT US</a></li>
                           <li><a href="/">OUR SERVICES</a></li>
                           
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>GET HELP</h4>
                       <ul>
                           <li><a href="/">FAQ</a></li>
                           <li><a href="/">SHIPPING</a></li>
                           <li><a href="/">RETURNS</a></li>
                           <li><a href="/">ORDER DETAILS</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>SHOPPING</h4>
                       <ul>
                           <li><a href="/">TV'S</a></li>
                           <li><a href="/">MACHINES</a></li>
                           <li><a href="/">HOME APPLIANCES</a></li>
                           <li><a href="/">BAGS</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>SOCIAL LINKS</h4>
                       
                           <div className="social-links">
                           <a href="/"><i className="" ></i></a>
                           <a href="/"><i className="" ></i></a>
                           <a href="/"><i className="" ></i></a>
                           </div>
                       
                   </div>
                   
               </div>
           </div>
          </div>
}
   
 
    </div>
  )
}

export default Navbar