// src/pages/Counter.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Box, Button, TextField, CircularProgress } from '@mui/material';

export default function Counter() {
    const [loading, setLoading] = useState(false);
    const { incrementCartCount, decrementCartCount } = useContext(CartContext);

    const handleIncrement = () => {
        setLoading(true);
        setTimeout(() => {
            incrementCartCount(); // Update the cart count in context
            setLoading(false);
        }, 500);
    };

    const handleDecrement = () => {
        setLoading(true);
        setTimeout(() => {
            decrementCartCount(); // Update the cart count in context
            setLoading(false);
        }, 500);
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleDecrement}>-</Button>
            <Button variant="outlined" onClick={handleIncrement}>+</Button>
            {loading && <CircularProgress size={24} />}
        </Box>
    );
}
