import React from 'react'
import './index.scss';

import { AccessAlarm, ThreeDRotation,FacebookRounded, Facebook, Pinterest, Twitter, Instagram ,} from '@material-ui/icons'
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
                          
                           
                           <p><span className='rounded-circle'><Facebook/></span> Facebook</p>
                           <p><span><Pinterest/> </span>Pinterest</p>
                           <p><span><Twitter/></span>Twitter</p>
                           <p> <span><Instagram/></span>  Instagram</p>
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
