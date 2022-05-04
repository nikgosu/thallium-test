import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NavBar = () => {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography className='logo' variant="h4">
          Thallium Test App
        </Typography>
        <div className='navlinks'>
          <Link className='link' to="/">
            Home
          </Link>
          <Link className='link' to="/about">
            About us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;