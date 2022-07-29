import { createContext,useContext, useReducer } from "react";
import axios from "axios";
import { WishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext();

 const WishlistProvider =({children})=>{

    const  token = localStorage.getItem("token");

    // const [{wishlist}, dispatch] = useReducer(WishlistReducer,{
    //     wishlist:[]
    // })

    const [{wishlist},dispatch] = useReducer(WishlistReducer, {
        wishlist : []
    })

(
    async ()=>{
        try{ 
            const response = await axios.get('/api/user/wishlist',{
                headers :{authorization : token}
            });console.log(response.data.wishlist)
            if(response.status === 200){
                dispatch({
                    type: "GET_WISHLIST",
                    payload: response.data.wishlist
                })
            }

        }catch(error){
            console.log(error)
        }
    }
)()

    return(
        <WishlistContext.Provider value={{wishlist}}>
        {children}
        </WishlistContext.Provider>
    )
}

 const useWishlist =()=> useContext(WishlistContext)

 export{useWishlist, WishlistProvider}