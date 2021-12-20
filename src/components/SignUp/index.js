import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='form  '>


            <div className="main-div  ">

                <h3 className='my-4'>Sign Up</h3>





                 {/* sign up section start */}

                <input className='form-control my-2  ' type="text" placeholder='Username ' />

                <input className='form-control my-2 ' type="text" placeholder='Full Name' />

                <input className='form-control my-2  ' type="text" placeholder='Email Address ' />

                <input className='form-control my-2 ' type="password" placeholder='Password' />

                <button className="btn-main px-3 py-2 my-3">
                       Create Account
                </button>



                {/* sign up section end */}













                {/* icons section start */}
                
                <span className='rule my-3'></span>


                <p> Sign Up with</p>

                <div className="icons">


                <i className="fa fa-facebook-official fa-3x " aria-hidden="true"></i>



                <i className="fa fa-google-plus-square fa-3x " aria-hidden="true"></i>


                <i className="fa fa-pinterest-square fa-3x  " aria-hidden="true"></i>


                    
                </div>


                {/* icons section end */}













                {/* login section start */}


                <span className='rule my-3'></span>
                    <div className="d-flex align-items-center">

                        <p className='mb-0 me-2'>
                            Already have an account
                        </p>

                       <Link to='/login'>

                        <button className="btn-main-outline">
                        Login
                       </button>
                       </Link>
                    
                    </div>


                {/* login section end */}






            </div>


            </div>
    )
}
