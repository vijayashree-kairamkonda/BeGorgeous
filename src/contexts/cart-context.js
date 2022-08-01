import axios from "axios";
import { createContext,useReducer, useContext} from "react";

import { CartReducer } from "../reducers/cart-reducer";

const CartContext = createContext([]);


 export const CartProvider = ({children})=>{

    const [{cart}, dispatch ] = useReducer(CartReducer, {
        cart : []
    })
 

    const token = localStorage.getItem("token");

    (async()=>{
        try{
            const response = await axios.get('/api/user/cart',{
                headers: {authorization :token}
            });
            if(response.data.status === 200){
                dispatch ({
                    type: "GET_CART",
                    payload :response.data.cart
                })
            }

        }catch(error){
            console.log(error)
        }
    })()


    const addToCart = async(product)=>{
        try{ 
            const response = await axios.post("/api/user/cart",{product},
            {
                headers :{authorization:token}
            });
            
            if(response.status === 201){
                dispatch({
                    type: "ADD_TO_CART",
                    payload: response.data.cart
                })
            }
        }catch(error){
            console.log(error)
        }
    }

const deleteFromCart = async(product)=>{
    try{
        const response = await axios.delete(`/api/user/cart/${product._id}`,{
            headers : {authorization : token}
        });
        if(response.status ===  200){
            dispatch({
                type: "DELETE_FROM_CART",
                payload: response.data.cart
            })
        }
    }catch(error){
        console.log(error)
    }
}

const incrementItem = async(product)=>{
    try{
        const response =  await axios.post(`/api/user/cart/${product._id}`,{
            action : {
                type: "increment",
            }
        },{
            headers : {authorization : token}
        })
        if(response.status === 200){
            dispatch({
                type : "INCREMENT_ITEM",
                payload : response.data.cart
            })
        }
    }catch(error){
        console.log(error)
    }
}

const decrementItem = async(product)=>{
    try{
        const response =  await axios.post(`/api/user/cart/${product._id}`,
        {
            action: {
              type: "decrement",
            }
          },
        {
            headers: { authorization: token }
        })
        if(response.status === 200){
            dispatch({
                type : "INCREMENT_ITEM",
                payload : response.data.cart
            })
        }
    }catch(error){
        console.log(error)
    }
}

    return(
        <CartContext.Provider value={{dispatch,cart,addToCart,deleteFromCart,incrementItem,decrementItem}}>{children}
        </CartContext.Provider>
    )
}

const useCart = ()=> useContext(CartContext)

export {  useCart}