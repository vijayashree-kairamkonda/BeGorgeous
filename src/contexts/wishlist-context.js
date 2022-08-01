import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { WishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  // const [{wishlist}, dispatch] = useReducer(WishlistReducer,{
  //     wishlist:[]
  // })

  const [{ wishlist }, dispatch] = useReducer(WishlistReducer, {
    wishlist: [],
  });
  
//   (async () => {
//     try {
//       const response = await axios.get("/api/user/wishlist", {
//         headers: { authorization: token },
//       });
//       console.log(response.data.wishlist);
//       if (response.status === 200) {
//         dispatch({
//           type: "GET_WISHLIST",
//           payload: response.data.wishlist,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   })()



(async () => {
    try{
        const response = await axios.get('/api/user/wishlist',
        {
            headers: { authorization: token }
        });
        if(response.data.status === 200){
            dispatch({
                type : "GET_WISHLIST",
                payload : response.data.wishlist
            })
        }
    }
    catch(error){
        console.log(error)
    }
})()

 const addToWishlist= async (product) => {
    try{
        const response = await axios.post('/api/user/wishlist',{product},
        {
            headers: { authorization: token }
        }); console.log(response.data)
         if(response.status === 201){
            dispatch({
                type : "ADD_TO_WISHLIST",
                payload : response.data.wishlist,
                
            })
         }
    }
    catch(error){
        console.log(error)
    }
}


const removeFromWishlist= async (product) => {
    try{
        const response = await axios.delete(`/api/user/wishlist/${product._id}`,
        {
            headers: { authorization: token }
        });console.log(response.data)
        if(response.status === 200){
            dispatch({
                type : "REMOVE_FROM_WISHLIST",
                payload : response.data.wishlist
            })
        }
    }
    catch(error){
        console.log(error)
    }
}



  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist,removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

const UseWishlist = () => useContext(WishlistContext);

export { UseWishlist, WishlistProvider };
