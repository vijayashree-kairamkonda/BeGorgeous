export const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    default:
      return state;
  }
};
