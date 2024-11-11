// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Header() {
    const [cartCount, setCartCount]=React.useState(0);



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        App 3.0
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link to="/home">
                            <Button sx={{ color: 'gray', fontWeight: 'bold' }}>Home</Button>
                        </Link>
                        <Link to="/soc">
                            <Button sx={{ color: 'gray', fontWeight: 'bold' }}>SOC</Button>
                        </Link>
                        <Link to="/policy">
                            <Button sx={{ color: 'gray', fontWeight: 'bold' }}>Policies</Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="cart">
                            <StyledBadge badgeContent={cartCount} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="user account"
                        >
                            <PersonIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}