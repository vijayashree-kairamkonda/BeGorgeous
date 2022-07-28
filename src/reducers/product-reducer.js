export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case "TOGGLE_CATEGORY" :{
        return{
            ...state,
            toggleCategory : state.toggleCategory.includes(action.payload) ? state.toggleCategory.filter((ele)=>ele!== action.payload) : [...state.toggleCategory,action.payload]
        }
    }
    case "TOGGLE_RATING" :{
        return{
            ...state,
            toggleRating : action.payload
        }
    }
    case "CLEAR_ALL" :{ 
      return{
        ...state,
        sortBy: "null",
        toggleCategory:[],
        toggleRating: 5
      }
    }
    default:
      return state;
  }
};
