import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,

} from './NavBar.styles';
  
const Navbar = () => {
  return (
    <>
      <Nav>
      
  <NavMenu>
        
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            More
          </NavLink>
          </NavMenu>
      </Nav>

    </>
  );
};
  
export default Navbar;