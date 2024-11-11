import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, TextField, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { CartContext,  } from '../Context/CartContext'

export default function Counter() {
    const [setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [setIsNavigating] = useState(false);
    const { cartCount, incrementCartCount, decrementCartCount } = useContext(CartContext);

    useEffect(() => {
        // Add a beforeunload event listener when the component mounts
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            setOpenDialog(true); // Show custom dialog
            event.returnValue = ''; // Required for Chrome to show the dialog
        };

        // Listen for the beforeunload event
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setCount(value);
        }
    };

    const handleDialogClose = (proceed) => {
        setOpenDialog(false);
        if (proceed) {
            setIsNavigating(true);
            window.removeEventListener('beforeunload', () => { }); // Remove event listener if the user confirms
            console.log("User confirmed navigation.");
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
            }}
        >
            {/* Decrement Button */}
            <Button
                variant="contained"
                onClick={handleDecrement}
                sx={{
                    bgcolor: '#e3848c',
                    color: 'white',
                    minWidth: 40,
                    height: 40,
                    fontSize: '1.5rem',
                    '&:hover': { bgcolor: '#d0717b' },
                }}
            >
                -
            </Button>

            {/* Display Count with Spinner */}
            <Box sx={{ position: 'relative' }}>
                <TextField
                    value={cartCount}
                    // onChange={handleInputChange}
                    variant="outlined"
                    inputProps={{ min: 0, style: { textAlign: 'center', padding: '3px' } }}
                    sx={{
                        width: 60,
                        '& .MuiOutlinedInput-root': {
                            padding: 0,
                            borderRadius: '4px',
                        },
                    }}
                />
                {loading && (
                    <CircularProgress
                        size={40}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-20px',
                            marginLeft: '-20px',
                        }}
                    />
                )}
            </Box>

            {/* Increment Button */}
            <Button
                variant="outlined"
                onClick={handleIncrement}
                sx={{
                    bgcolor: '#365db3',
                    color: 'white',
                    border: 'none',
                    minWidth: 40,
                    height: 40,
                    fontSize: '1.5rem',
                    '&:hover': { bgcolor: '#2f4a91' },
                }}
            >
                +
            </Button>
            {loading && <CircularProgress size={24} />}

            {/* Navigation Confirmation Dialog */}
            <Dialog open={openDialog} onClose={() => handleDialogClose(false)}>
                <DialogTitle>Confirm Navigation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are moving out of this session. Click on Yes to proceed or No to cancel.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose(false)} color="primary">
                        No
                    </Button>
                    <Button onClick={() => handleDialogClose(true)} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}