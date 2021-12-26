import {Link, useNavigate} from 'react-router-dom';
import React from 'react'
import './index.scss';

import {
    
     Modal, 
      ModalBody,
      Button
     } from 'reactstrap';

export default function LogIn(props) {



    // redirect hook

    const navigate=useNavigate();
    


    // modal handler
    
    const [modal, setModal] = React.useState(false);
  
   const toggle = () => setModal(!modal);


    // login hamdler

    const  loginHandler=(e)=>{
        e.preventDefault();
        props.setLogin(true);
        toggle();
    }


    //redirect handler

    const redirectHandler=()=>{
        toggle();
        navigate('/shopper-marketplace')

    }

    return (
        <form className='form ' onSubmit={loginHandler}>
               <div className="main-div ">



                   <h3 className='my-4'>Login</h3>








                    {/* Login section start */}

                   <input className='form-control my-2  ' type="email" placeholder='Email '  required />

                   <input className='form-control my-2 ' type="password" placeholder='Password' required />


                   <div className="d-flex justify-content-between w-100 my-3">
                        <div className="mb-3 form-check">
                             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>

                        </div>

                        <p>Forget Password?</p>

                   </div>

                   <button className="btn-main px-3 py-2 mb-3" type='submit'>
                       Log in
                   </button>

                   {/* Login section end */}















                {/* icons section start */}

                   <span className='rule my-3'></span>


                   <p> Sign in with</p>

                   <div className="icons">


                   <i className="fa fa-facebook-official fa-3x " aria-hidden="true"></i>



                   <i className="fa fa-google-plus-square fa-3x " aria-hidden="true"></i>


                   <i className="fa fa-pinterest-square fa-3x  " aria-hidden="true"></i>


                       
                   </div>


                   {/* icons section end */}











                   {/* register section start */}


                   <span className='rule my-3'></span>
                    <div className="d-flex align-items-center">

                        <p className='mb-0 me-2'>
                            Not Have An Account?
                        </p>

                       <Link to='/signup'>

                        <button className="btn-main-outline">
                        Register
                       </button>
                       </Link>
                    
                    </div>
                   

               {/* register section end */}






                  {/* logout modal start  */}

        <Modal isOpen={modal}
                toggle={toggle} centered
                >
                <ModalBody className='m-4'>
                  <h5 className='text-success text-center'> Logged in successfully</h5>
                    

                    
                    <div className='d-flex justify-content-center mt-5'>


                      


                      <Button onClick={redirectHandler}>
                        Ok
                      </Button>
                    </div>
                </ModalBody>

            </Modal>

    {/* logout modal end  */}







               </div>
        </form>
    )
}
