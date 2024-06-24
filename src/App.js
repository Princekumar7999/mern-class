
import './App.css';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import CartContext from './context/CartContext';

function App() {
  const [percentage,setPercentage] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setPercentage((percentage)=>{
        if(percentage<100){
          return percentage+10;
        }
        else{
          return 100;
        }
      })},1000);
    return ()=>{clearInterval(interval);}
    
  });

  const[cart,setCart] = useState({});

  function increaseQuantity({product}){

    const newCart = {...cart};
    if(!newCart[product.id]){
      newCart[product.id] = {...product, quantity: 0};
    }
    
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity({product}){

    const newCart = {...cart};
    if(!newCart[product.id]){
      return;
    }
    newCart[product.id].quantity -= 1;
    if(newCart[product.id].quantity <= 0){
      delete newCart[product.id];
    }

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
    <div className="App">
      <Products />
    </div>
    </CartContext.Provider>
  );
}

export default App;