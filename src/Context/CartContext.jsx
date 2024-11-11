// src/Context/CartContext.js
import React, { createContext, useState } from 'react';

// Create context
export const CartContext = createContext();

// Create provider component
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const incrementCartCount = () => setCartCount((prevCount) => prevCount + 1);
    const decrementCartCount = () => setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

    return (
        <CartContext.Provider value={{ cartCount, incrementCartCount, decrementCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
