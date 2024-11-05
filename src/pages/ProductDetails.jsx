import React from 'react';
import { Box, Typography, Button, Select, MenuItem, Rating, Divider } from '@mui/material';

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60vw',
        height: '80vh',
        margin: '0 auto',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Left Section: Product Image */}
      <Box
        component="img"
        src="../assets/Coat.png"
        alt="Plain T-Shirt"
        sx={{
          width: '30%',
          height: 'auto',
          maxHeight: '80%',
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      {/* Right Section: Product Details */}
      <Box
        sx={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        {/* Product Title */}
        <Typography variant="h5" fontWeight="bold">
          Plain T Shirt
        </Typography>

        {/* Price and Discount */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="h6" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
            $69.00
          </Typography>
          <Typography variant="h5" color="primary" sx={{ ml: 1 }}>
            $49.00
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
            24% OFF
          </Typography>
        </Box>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating value={4} readOnly size="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            (35)
          </Typography>
        </Box>

        {/* Product Description */}
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          A classic T-shirt never goes out of style. This is our most premium collection of shirts.
          This plain white shirt is made up of pure cotton and has a premium finish.
        </Typography>

        {/* Size Selection and Add to Cart Button */}
        <Box sx={{ mt: 2, width: '2in' }}>
          <Typography variant="body1" fontWeight="bold">
            Select Size
          </Typography>
          <Select
            defaultValue=""
            displayEmpty
            fullWidth
            sx={{
              mt: 1,
              height: 40,
            }}
          >
            <MenuItem value="" disabled>
              Select Size
            </MenuItem>
            <MenuItem value="S">Small</MenuItem>
            <MenuItem value="M">Medium</MenuItem>
            <MenuItem value="L">Large</MenuItem>
            <MenuItem value="XL">X-Large</MenuItem>
          </Select>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            width: '2in',
            py: 1,
            fontWeight: 'bold',
            mt: 2,
          }}
        >
          ADD TO CART
        </Button>

        {/* Category and Tags */}
        <Divider sx={{ my: 2, width: '100%' }} />
        <Typography variant="body2" color="textSecondary">
          Category: Men, Polo, Casual
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
          Tags: Modern, Design, Cotton
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
