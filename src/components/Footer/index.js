import React from 'react'
import './index.scss';


export default function Footer() {
    return (
        <div className='footer'>
            
            <div className="links row pt-5 px-5 ">

                <div className="col-12 col-sm-6 col-md-3  mb-3">

                           <h5>
                               How We Help
                           </h5>

                           <p>Retailers</p>
                           <p>Interiors Designers</p>
                           <p>Product Designers</p>
                           <p>Wholesalers/Importers</p>
                           <p>Artisans</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">

                             <h5>
                               Get To Know Us
                           </h5>
                           <p>About</p>
                           <p>Policies</p>
                           <p>Careers</p>
                           <p>Press</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">

                            <h5>
                               Join The Community
                           </h5>
                           <p>Upcoming Events</p>
                           <p>Become a Buyer</p>
                           <p>Become a Seller</p>
                </div>  


                <div className="col-12 col-sm-6 col-md-3 mb-3">

                            <h5>
                               Follow Us
                           </h5>
                          
                           <div className="d-flex footer-icons my-2">
                               <p className='icon'><i className="fa fa-facebook" aria-hidden="true"></i>
                             </p>
                             <p>Facebook</p>
                           </div>


                           <div className="d-flex footer-icons my-2">
                               <p className='icon'><i className="fa fa-pinterest-p" aria-hidden="true"></i>
                             </p>
                             <p>Facebook</p>
                           </div>

                           <div className="d-flex footer-icons my-2">
                               <p className='icon'><i className="fa fa-twitter" aria-hidden="true"></i>
                             </p>
                             <p>Facebook</p>
                           </div>


                           <div className="d-flex footer-icons my-2">
                               <p className='icon'><i className="fa fa-instagram" aria-hidden="true"></i>
                             </p>
                             <p>Facebook</p>
                           </div>
                          
                </div>

                <hr />
            </div>





            



            <div className="terms d-flex justify-content-center">

                <p> &#169;
 2016 Uiminit.com</p>
                <p>Terms & Conditions</p>
                <p>Privacy</p>
                    
            </div>
        </div>
    )
}
