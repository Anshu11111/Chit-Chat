import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
 const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id='navbg'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Chit-Chat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link> 
             </li>
              
             <li className='nav-item' >
                <Link to="/about" className='nav-link'>About Us</Link> 
             </li>
              
             <li className='nav-item'>
                <Link to="/features" className='nav-link'>Features</Link> 
             </li>
            
             
            </ul>
            <Link to="/login" className='nav-link'><button>Login</button></Link> 
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;