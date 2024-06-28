import {createStore} from 'redux';
import {omit} from 'lodash';
import { type } from '@testing-library/user-event/dist/type';
const ADD_To_cart = 'ADD_TO_CART_ONE';
const Remove_From_Cart = 'REMOVE_FROM_CART';
export function addtocart(product){
    return{
        type: ADD_To_cart,  
        payload: product
    }
}
export function removefromcart(product){
    return{
        type: Remove_From_Cart,
        payload: product
    };
}
function  cartReducer(state = {items:{}},action){
    switch (action.type){
        case 'ADD_TO_CART':{
            const product = action.payload;
            if(state.items[product.id]){
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    
                    }
                }
            }
            else{
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity:1
                        }
                    }
                }
            }
        }
        case 'REMOVE_FROM_CART':{
            const product = action.payload;
            if(state.items[product.id].quantity>1){
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                }
            }
            else{
                return{
                    ...state,
                    items:omit(state.items,[product.id])
                }
            }
        }
        default:{
            return state;
        }

    }
}
const store = createStore(cartReducer);
export default store;

// action is an object 

// type
// payload
