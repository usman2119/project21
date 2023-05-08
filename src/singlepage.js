import { useEffect } from "react";
import { useProductContext } from "./context/ContextProvider";
import {useParams} from "react-router-dom"
import MyImage from "./components/MyImage";
import Stars from "./components/stars";
import AddToCart from "./components/AddToCart";
import PriceFormat from "./Helpers/PriceFormat";
import"./css/singleproduct.css"
const API="https://api.pujakaitem.com/api/products"

const SinglePage = () => {
    const{getSingleProduct,singleProduct,}=useProductContext()
   
    const {id}=useParams();
    const{
        name,
        image,
        stars,
        reviews,
        stock,
        amount,
        description,
        price
    }=singleProduct;
     useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`);
     },[])
    return ( 
        <div className="single-format">
            
            <div className="product-images">
                <MyImage imgs={image} />
            </div>
            <div className="single-page-details">
            <p>{name}</p>
            <div className="stars">
                <p>Ratings :</p>
            <Stars stars={stars} reviews={reviews} />
            </div>
            <div className="price">
                <PriceFormat price={price}/>
            </div>
            <p className="description">Description : {description}</p>
            <button  className="add-cart">
            {stock>0 && <AddToCart product={singleProduct}/>}
            </button>
            </div>
        </div>
        
    );
}
 
export default SinglePage;