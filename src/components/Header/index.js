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
export default function Header() {


let [modal,setModal]=useState(false);

   const toggle = ()=> {
          setModal(!modal)
   }
    return (

            
        <div className='header'>
            <Navbar  light expand="md">


          <NavbarBrand href="/">    
            <p className='nav-brand'>
              SH<span>O</span>PPER
              </p>     
          </NavbarBrand>


          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={modal} navbar>
            <Nav className="w-100 d-flex justify-content-around " navbar>



              <div className="left d-flex ms-5 ">
              <input className="form-control" type="text" placeholder="Search for Products"/>
              <button className="btn-main ">Search</button>
              </div>



              <div className="right d-flex">

                <NavItem>
                <button className="btn-outline-grey nav-item">
                Log in
              </button>

                </NavItem>

                <NavItem>
                <button className="btn-outline-grey nav-item">
                Sign up
              </button>

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