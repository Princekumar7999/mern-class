import './ProductCard.css';
import { useRef } from 'react';
import logo1 from '../assests/logo1.png';
function ProductCard({ title, price }){
    let pRef = useRef(0);
    function printTitle(){
        console.log("printTitle");
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }
        else{
            pRef.current.style.display = "none";
        }
        pRef.current.style.display = "none";
    }
    return (
        <div className="product-card">
        <p onClick={printTitle} >{title}</p>
        <p ref={pRef}>{price}</p>
        <img src = { logo1}/>
    </div>
    )
}

export default ProductCard;



//useState
//useRef
//useEffect

//custom hooks
//default hooks
//they should on the top of a function
//they should be not in nay condition or loop