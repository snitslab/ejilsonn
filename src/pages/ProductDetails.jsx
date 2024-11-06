import React from 'react';
import { Box, Typography, Button, Select, MenuItem, Rating, Divider } from '@mui/material';
import coatimage from '../assets/Coat.png'

const ProductDetails = () => {
    return (
        <Box
            sx={{
                height: '80vh',
                width: '60vw',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 'auto',
            }}
        >
            {/* Left Section: Product Image */}
            <Box
                sx={{
                    width: '30vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    // component="img"
                    // src="src/assets/Coat.png"
                    // alt="Plain T-Shirt"
                    sx={{
                        height: '60vh',
                        width: 'auto',
                        borderRadius: 2,
                        objectFit: 'cover',
                    }}>
                        <img src={coatimage} alt="The Data Is Uploading"></img>
                    </Box>
            </Box>

            {/* Right Section: Product Details */}
            <Box
                sx={{
                    width: '30vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {/* Product Title */}
                <Typography variant="h5" fontWeight="bold">
                    PRINCE COAT
                </Typography>

                {/* Price and Discount */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Typography variant="h6" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                    ₹6999.00
                    </Typography>
                    <Typography variant="h5" color="primary" sx={{ ml: 1 }}>
                    ₹4999.00
                    </Typography>
                    <Typography
                        variant="body2"
                        color="secondary"
                        sx={{
                            ml: 2,
                            bgcolor: 'orange',
                            px: 1,
                            borderRadius: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        30% OFF
                    </Typography>
                </Box>

                {/* Rating */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Rating value={4} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                        (135)
                    </Typography>
                </Box>

                {/* Product Description */}
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                This Prince Coat is a sophisticated, high-quality garment that exudes elegance and<br></br>
                 timeless style. Crafted with premium materials, it offers warmth and durability <br></br>
                while maintaining a tailored fit. Its classic design, featuring fine detailing and<br></br>
                luxurious fabric, makes it an ideal choice for both formal and casual settings..
                </Typography>

                {/* Size Selection */}
                <Box sx={{ mt: 2, width: '2.5in' }}>
                    <Typography variant="body1" fontWeight="bold">
                        Select Size
                    </Typography>
                    <Select fullWidth defaultValue="" displayEmpty>
                        <MenuItem value="" disabled>
                            Select Size
                        </MenuItem>
                        <MenuItem value="S">Small</MenuItem>
                        <MenuItem value="M">Medium</MenuItem>
                        <MenuItem value="L">Large</MenuItem>
                        <MenuItem value="XL">X-Large</MenuItem>
                    </Select>
                </Box>

                {/* Add to Cart Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, py: 1.5, width: '2.5in', fontWeight: 'bold' }}
                >
                    ADD TO CART
                </Button>

                {/* Category and Tags */}
                <Divider sx={{ my: 2, width: '100%' }} />
                <Typography variant="body2" color="textSecondary">
                    Category: Men, Tradition, Occasional
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                    Tags: Modern, Design, Cotton
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductDetails;
