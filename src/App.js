import {  BrowserRouter as Router,  Routes,  Route, } from "react-router-dom";
import Home from "./home";
import SinglePage from "./singlepage";

import Products from "./Products";
import CartPage from "./cartpage";
import Navbar from "./navbar";
import Footer from "./footer";
import Login from "./Login";
import Signup from "./Signup";





function App() {
return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singlepage/:id" element={<SinglePage/>} />
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/products" element={<Products/>}/>
    
    </Routes>
    
   </Router>
);
}

export default App;
