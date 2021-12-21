import React from 'react'
import './index.scss';


export default function ProductItem(props) {


    
    return (
        <div className='product-item  col-12 col-sm-6 col-md-4  my-5 ' >

            



            {/* image div start */}



            <div className='image w-100 d-flex justify-content-center'>


                <img src={props.image} className='img-fluid'  alt="" width='200' height='200' />

            </div>

            

            {/* image div end */}










            {/* description div start */}


            <div className="desc w-100 px-3 pb-3 d-flex justify-content-between ">

                <div className="left">
                    <p> {props.name}</p>
           
                   <p>seller is {props.seller}</p>
                    
                   <p>$ {props.price}</p>


                </div>

                <div className="right d-flex align-items-center">
                    <a href="#"> <i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                    </a>
                </div>

                    
            </div>


            {/* description div end */}


            


            

        </div>
    )
}
