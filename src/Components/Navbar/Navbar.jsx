import React from 'react';
import NavbarStyle from './NavbarStyle.css'

const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Aviate</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className='menu-links'>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">JOBS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>
    
    </ul>
  </div>
  </div>
</nav>
</div>
    </>
    
  )
}

export default Navbar;
