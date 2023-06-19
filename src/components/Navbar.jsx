import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../navbar.css';
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lawyer Portfolio
        </Typography> */}
        <Button color="inherit" >
        <Link to="/" className="navbar-link">Home</Link>
        </Button>
        <Button color="inherit" >
        <Link to="/about" className="navbar-link">About</Link>
        </Button>
        <Button color="inherit" >
        <Link to="/contact" className="navbar-link">Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar