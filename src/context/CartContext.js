
import {createContext} from "react";
const CartContext = createContext({
    cart : 0,
    increaseQuantity : () => {},
    decreaseQuanity : () => {}
})
export default CartContext;