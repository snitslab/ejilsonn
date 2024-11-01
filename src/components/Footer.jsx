import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Home, Email, Phone, Print } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      {/* Wrapper Box for four components */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', padding: '20px' }}>

        
        {/* Company Name */}
        <Box sx={{ minWidth: '20%', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">COMPANY NAME</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px', maxWidth: '30ch', lineHeight: 1.8 }}>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Box>

        {/* Products */}
        <Box sx={{ minWidth: '20%', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">PRODUCTS</Typography>
          <Box sx={{ marginTop: '10px', lineHeight: 1.8 }}>
            <Link href="#" color="inherit" underline="none">Angular</Link><br />
            <Link href="#" color="inherit" underline="none">React</Link><br />
            <Link href="#" color="inherit" underline="none">Vue</Link><br />
            <Link href="#" color="inherit" underline="none">Laravel</Link>
          </Box>
        </Box>

        {/* Useful Links */}
        <Box sx={{ minWidth: '20%', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">USEFUL LINKS</Typography>
          <Box sx={{ marginTop: '10px', lineHeight: 1.8 }}>
            <Link href="#" color="inherit" underline="none">Pricing</Link><br />
            <Link href="#" color="inherit" underline="none">Settings</Link><br />
            <Link href="#" color="inherit" underline="none">Orders</Link><br />
            <Link href="#" color="inherit" underline="none">Help</Link>
          </Box>
        </Box>

        {/* Contact */}
        <Box sx={{ minWidth: '20%', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">CONTACT</Typography>
          <Box sx={{ marginTop: '10px', lineHeight: 1.8 }}>
            <Box display="flex" alignItems="center">
              <Home sx={{ marginRight: '5px' }} />
              <Typography variant="body2">New York, NY 10012, US</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <Email sx={{ marginRight: '5px' }} />
              <Typography variant="body2">info@example.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <Phone sx={{ marginRight: '5px' }} />
              <Typography variant="body2">+ 01 234 567 88</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginTop: '5px' }}>
              <Print sx={{ marginRight: '5px' }} />
              <Typography variant="body2">+ 01 234 567 89</Typography>
            </Box>
          </Box>
        </Box>

      </Box>
      
      {/* Footer Bottom */}
      <Box sx={{ marginTop: '20px', borderTop: '1px solid #e0e0e0', paddingTop: '10px' }}>
        <Typography variant="body2" color="textSecondary">
          © 2021 Copyright:
          <Link href="https://google.com/" color="inherit" underline="none"> gmail.com</Link>
        </Typography>
      </Box>
    </Box>
  );
}