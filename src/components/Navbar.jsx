import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
//import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lawyer Portfolio
        </Typography> */}
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar