import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge, Box, AppBar, Toolbar, Typography } from '@mui/material';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`, // Wrapped in backticks
      padding: '0 4px',
    },
}));



export default function Header() {
    // const [cartCount, setCartCount]=React.useState(1);
    const { cartCount } = useContext(CartContext);

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