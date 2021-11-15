import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NavLink style={{textDecoration: 'none'}} to="/appointment"><Button style={{color: 'white'}}>Appointment</Button></NavLink>
          
          {
            user?.email ?
            <>
            <NavLink style={{textDecoration: 'none'}} to="/dashboard"><Button style={{color: 'white'}}>Dashboard</Button></NavLink>
            <Button style={{textDecoration: 'none', color: 'white'}} onClick={logOut}>Logout</Button>
            </> :
            <NavLink style={{textDecoration: 'none'}} to="/login"><Button style={{color: 'white'}}>Login</Button></NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;