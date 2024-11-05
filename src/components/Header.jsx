import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
//import { BoltRounded } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
//import { findByLabelText } from '@testing-library/react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Header() {
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
                        SNITS 3.0
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link to="/home">
                        <Button sx={{ color: 'gray', fontWeight: 'bold' }}>Home</Button>
                        </Link>
                        <Link to="/soc">
                        <Button sx={{ color: 'gray', fontWeight: 'bold' }}>SOC2 Type II</Button>
                        </Link>
                        <Link to="/policy">
                        <Button sx={{ color: 'gray', fontWeight: 'bold' }}>Policies</Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
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