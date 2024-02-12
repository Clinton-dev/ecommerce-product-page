import { createContext, useState } from "react";

const initialState = [];

export const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialState);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity = item.quantity;
    } else {
      updatedCartItems.push(item);
    }

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => itemId !== cartItem.id
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
