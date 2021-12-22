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

export default function Header(props) {





let [nav,setNav]=useState(false);

   const navToggle = ()=> {
          setNav(!nav)
   }


// category toggler


   let [catNav,setCatNav]=useState(false);

   const catToggle = ()=> {
    setCatNav(!catNav)
   }








  



    return (

            
        <div className='header'>





          {/* upper header start  */}



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


    
    {/* upper header end  */}





















      {/* category  start  */}

      <Navbar  light expand="md" className='category mb-3'>


      <NavbarToggler onClick={catToggle}  />
          <Collapse isOpen={catNav} navbar>
            <Nav className="w-100 d-flex justify-content-around " navbar>



            <NavItem className='nav-item'>
                <Link to='/shopper-marketplace'  onClick={()=>{props.setCategory('all')}}>
                  All items
                </Link>
            </NavItem>


            


            <NavItem className='nav-item'>
            <Link to='/shopper-marketplace' onClick={()=>{props.setCategory('clothes')}}>
                  clothes
                </Link>
            </NavItem>


            <NavItem className='nav-item'>
            <Link to='/shopper-marketplace' onClick={()=>{props.setCategory('shoe')}}>
                  Shoes
                </Link>
            </NavItem>




            <NavItem className='nav-item'>
            <Link to='/shopper-marketplace' onClick={()=>{props.setCategory('electronics')}}>
                  Electronics
                </Link>
            </NavItem>


            <NavItem className='nav-item'>
            <Link to='/shopper-marketplace' onClick={()=>{props.setCategory('furniture')}}>
                  Furniture
                </Link>
            </NavItem>




          </Nav>

          </Collapse>

          


        </Navbar>



      {/* category  end  */}











      










            
        </div>



    )
}





