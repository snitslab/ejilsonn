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


export default function Header() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

                    >
                        SNITS 3.0
                    </Typography>

                    <Box>
                        <button color='Home'>Home</button>
                        <button color='inherit'>SOC2 Type II</button>
                        <button color='inherit'>Policies</button>
                    </Box>

                    <Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                            <PersonIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
