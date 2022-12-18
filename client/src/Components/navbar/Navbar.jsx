import "./navbar.css";
import Logo from '../../static/Logo.png';
import { Link } from "react-router-dom";
import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

// const navmenu=document.querySelector('.Menu');
// const navul=document.querySelector('.navitem>ul');

// navmenu.addEventListener('click',function(){
//     navul.style='left:-20%';
// });


const pages = ['Home', 'About', 'Contact','Logout'];

const Navbar= () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ul className="mobile-navitem">
          <Link to='/'  className="mobile-navitem-a"><li>Home</li></Link>
          <Link to='/about' className="mobile-navitem-a"><li>About</li></Link>
          <Link to='/contact' className="mobile-navitem-a"><li>Contact</li></Link>
          <Link to='/login' className="mobile-navitem-a"><li>Logout</li></Link>
          </ul>
        </ListItem>
      </List>
    </Box>
  );
  return (

    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" color="transparent" >
          <Toolbar>
            <IconButton
              size="large"
              className="mobile-menu"
              onClick={toggleDrawer("left", true)}
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div className="logo">
             <img className="logoimg" src={Logo} alt="Logo" />
            </div>
            <div className="navitem">
            <ul className="desktop-menu ">
                {/* <li >
                  <Link to='/'>Home </Link>
                </li> */}
                <Link to='/' style={{textDecoration:"none" , color:"inherit"}}><li className="navlistitem">Home</li>
                </Link>
                <Link to='/about' style={{textDecoration:"none" , color:"inherit"}}><li className="navlistitem">About</li>
                </Link>
                <Link to='/contact' style={{textDecoration:"none" , color:"inherit"}}><li className="navlistitem">Contact</li>
                </Link>
                <Link to='/login' style={{textDecoration:"none" , color:"inherit"}}><li className="navlistitem">Logout</li>
                </Link>
            </ul>
            </div>
            <div className="navbutt">
               <Link to='/create'>
               <button className="createpost">CREATE POST</button>
               </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}
export default Navbar;
