import { createSelector } from "reselect";

const selectorCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cart) => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectorCartReducer],
  (cart) => cart.isCartOpen
);

/* export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0 )
); */

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);

