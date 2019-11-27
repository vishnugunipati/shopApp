import {ADD_TO_CART} from "../action/cart";
import cartItems from '../../models/cart-items'

const initialState = {
  item: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedproduct.price;
      const prodTitle = addedproduct.title;

      let updatedOrNewCartItem;

      if(items[addedProduct.id]){
        //already added items
        updatedOrNewCartItem = new CartItem(
          state.items, [addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return{
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + prodPrice
      }
  }

  return state;
};
