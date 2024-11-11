// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to cart, increments the cart count
  {/*const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };
  if you enable this change the below line <CartContext.Provider value={{ cartCount, addToCart }}>
*/}

  return (
    <CartContext.Provider value={{cartCount}}> 
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };