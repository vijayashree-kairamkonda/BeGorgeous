export const WishlistReducer = (state, action) => { console.log(action.payload)
  switch (action.type) { 
    case "GET_WISHLIST":
        case "ADD_TO_WISHLIST":
            case "REMOVE_FROM_WISHLIST":
      return { 
        ...state,
        wishlist: action.payload,
        
      };
    default:
      return state;
      
  }
};
