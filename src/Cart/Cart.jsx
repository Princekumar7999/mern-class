
import React from 'react'
import {useSelector} from 'react-redux'
import CartCard from './CartCard'

// function  Cart(){
//     let Cart = useSelector((state) =>{
//         return state.items;
//     })
//     return (
//         <div>
//             <ul>{
//             Object.values(Cart).map((item) => {
//                 return (<li key = {item.id}>{item.title}</li>)
//             })
//         }
            
//             </ul>

//         </div>
//     )
// }
 
    
    const cart = useSelector((state) => {
        state.items;
    });

return (
    <div>
        {
            Object.values(Cart).map(function(item,index){
                return(<CartCard key={index} item={item}/>)
            })
        }
    </div>
)

export default Cart;