// home.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import dispmenshop from '../assets/Shop.png'

const Home = () => {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                padding: 2,
            }}
        >
            <Typography variant="h6" component="div" gutterBottom>
                Mens Collections
            </Typography>
            <Box                
                sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '58px',
                }}>
                <img src={dispmenshop} alt='Its Updating'></img>    
                </Box>
            {/* /> */}
            <Button
                component={Link}
                to="/home/ShoppingCategories" // Replace with the actual product page route
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
                Shop Now
            </Button>
        </Box>
    );
};

export default Home;
