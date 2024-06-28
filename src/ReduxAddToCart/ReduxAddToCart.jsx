
import { useDispatch,useSelector } from "react-redux";

function ReduxAddToCart({ product}){
    console.log("AddToCart", product.id)
    /// useSelector
    let dispatch = useDispatch();
    function increase(){
        //dispach ({type:,payload:})
        dispatch({type:'ADD_TO_CART',payload: product});
    }
    function decrease(){
        //dispach ({type:,payload:})
        dispatch({type:'REMOVE_FROM_CART',payload: product});
    }

    let quantity = useSelector(state =>{
        return state.items[product.id]? state.items[product.id].quantity : 0;
    });

    // const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
                
            </div>
     )  
    }
    else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }
}
export default ReduxAddToCart;