import React from 'react';
import './NavBar.css';

const NavBar= () => {
    return (
        <nav className="navbar">
            <h1>Pet Store</h1>
          <section className="links">
          <a href= "#">Home</a> 
          <a href= "#">About</a> 
          </section>  
        </nav>
        )
}
export default NavBar;