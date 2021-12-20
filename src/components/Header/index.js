import React, { useState } from 'react'
import './index.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
     } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {

// navbar toggler


let [nav,setNav]=useState(false);

   const navToggle = ()=> {
          setNav(!nav)
   }

  



    return (

            
        <div className='header'>
            <Navbar  light expand="md">


          <NavbarBrand >
            <Link to="/shopper-marketplace"  >    
            <p className='nav-brand'>
              SH<span>O</span>PPER
              </p>     
              </Link>
          </NavbarBrand>


          <NavbarToggler onClick={navToggle} />
          <Collapse isOpen={nav} navbar>
            <Nav className="w-100 d-flex justify-content-around " navbar>



              <div className="left d-flex ms-5 ">
              <input className="form-control" type="text" placeholder="Search for Products"/>
              <button className="btn-main ">Search</button>
              </div>



              <div className="right d-flex">

                <NavItem>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="btn-outline-grey nav-item"> 
                Log in                      
              </button>
              </Link>

                </NavItem>

                <NavItem>
                <Link to="/signup">
                <button className="btn-outline-grey nav-item">              
                sign up
              </button>
              </Link>

                </NavItem>
              
              

              
              </div>

              
              
              
              
            </Nav>
          </Collapse>
        </Navbar>







      










            
        </div>



    )
}





{/* <NavbarBrand href="/">    
            <p className='nav-brand'>
              SH<span>O</span>PPER
              </p>     
          </NavbarBrand> */}