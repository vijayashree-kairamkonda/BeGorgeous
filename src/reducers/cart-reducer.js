export const CartReducer =(state,action)=>{
    switch(action.type){
        case "GET_CART":
            case "ADD_TO_CART":
                case "DELETE_FROM_CART":
                    case "INCREMENT_ITEM":{
            return {
                ...state,
                cart: action.payload
            }
            
        }default : return state;
    }
}