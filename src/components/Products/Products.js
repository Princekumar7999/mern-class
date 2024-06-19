import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
 //function Products(){
//     // const products = [
//         // {
//         // id: 1,
//         // title: "Apple iPhone 14",
//         // price: "Rs. 1,00,000"
//         // },
//         // {
//         // id: 2,
//         // title: "Apple iPhone 13",
//         // price: "Rs. 70,000"
//         // },
//         // {
//         // id: 3,
//         // title: "Google Pixel 7",
//         // price: "Rs. 50,000"
//         // },
//         // {
//         // id: 4,
//         // title: "Nokia 1100",
//         // price: "Rs. 2,000"
//         // },
//         // {
//         // id: 5,
//         // title: "Samsung Galaxy S10",
//         // price: "Rs. 1,00,000"
//         // },
//         // {
//         // id: 6,
//         // title: "Sony Xperia S10",  // {
//         // id: 1,
//         // title: "Apple iPhone 14",
//         // price: "Rs. 1,00,000"
//         // },
//         // {
//         // id: 2,
//         // title: "Apple iPhone 13",
//         // price: "Rs. 70,000"
//         // },
//         // {
//         // id: 3,
//         // title: "Google Pixel 7",
//         // price: "Rs. 50,000"
//         // },
//         // {
//         // id: 4,
//         // title: "Nokia 1100",
//         // price: "Rs. 2,000"
//         // },
//         // {
//         // id: 5,
//         // title: "Samsung Galaxy S10",
//         // price: "Rs. 1,00,000"
//         // },
//         // {
//         // id: 6,
//         // title: "Sony Xperia S10",
//         // price: "Rs. 1,00,000"
//         // }
//         // ];
//         // price: "Rs. 1,00,000"
//         // }
//         // ];

//         let Products=[];
//         let [products,setProducts] = useState([]);
//         fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
//             (response) =>{
//                 return response.json();
//             }
//         ).then((res) => {
//             console.log(res);
//             products =res;
//         })
        
    
//     return (
//         <div>
//         <div>Effect
//         </div>
//         {
//             products.map(function(item){
//                 return (
//                     <ProductCard title={item.title} price={item.price} />
//                 )
//             })
//         }
//         </div>
//     )
// }
// export let a=10;
// export let b=20;
// export default Products;


// //javascript xml
// //named export
// //dafault exporyt
// //one default export
// //multiple named export




// oldDom = [
// <ProductCard {keyi1} title="Title 1" />,
// <ProductCard {keyi2} title="Title 2" />,
// <ProductCard {keyi3} title="Title 3" />
// ]

// newDom = [
// <ProductCard {keyi1} title="Title 1" />,
// <ProductCard {keyi4} title="Title 4" />,
// <ProductCard {keyi1} title="Title 2" />,
// <ProductCard {keyi3} title="Title 3" />
// ]

// why in a key,should i not give an index??
//because if we give an index,then the key will be same for all the elements

export default function useIsMobile() {
    const screenSize = useRef();

    useEffect(() => {
        window.addEventListener("resize", () => {
            screenSize.current = window.innerWidth;
        });
        return () => {
            window.removeEventListener("resize", () => {
                screenSize.current = window.innerWidth;
            })
        }
    }, []);
    
    return screenSize.current <= 768;
}
// export default Products;