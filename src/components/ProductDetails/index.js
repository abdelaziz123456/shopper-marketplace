import React, { useState } from 'react';

import './index.scss';
import {  useNavigate, useParams } from 'react-router-dom';
import {items} from '../../Data';
import Description from '../Description';

export default function ProductDetails(props) {

//useHistory hook to redirect the user to favourite page

let navigate=useNavigate();


//router hook to get specific product by id

let params=useParams();

let product=items.find(item=>item.id==params.id) ;


let favList=props.favList;
let setFavList=props.setFavList;
const favouriteHandler=()=>{
  setFavList([...favList,{...product}]);
  navigate('/favitems')
}




// item number state

const [num,setNum]=useState(1);


// here I make max num of items i can add to cart == availableNumber

const increaseItem=()=>{
  if(num<Number(product.availableNumber)){
    setNum(num+1);
  }
    
}


// min num of items can be added is 1 
const decreaseItem=()=>{
  if(num>1){
    setNum(num-1);
  }
}





    
    return (
        
            
         <div className='product-details'>

      {/* item path section start */}

             <div>
            <nav  aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">{product.category}</li>
                    <li class="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>

            </div>


    {/* item path section end  */}


















    {/* item details start */}

    <div className="row item-details">


        <div className="img col-12 col-md-6 p-3">
           <img src={product.image} alt="" className='img-fluid'/>
      
        </div>



        <div className="details col-12 col-md-6 d-flex justify-content-center align-items-center ">
            <div className="">

            
                <h4>{product.name}</h4>

                <h5 className='my-2'> {product.availableNumber}  is available</h5>

                <h4 className='my-2'> <span> $ {product.price} </span></h4>

                <h6 className='my-2'> Sold By <span>{product.seller}</span> </h6>
            
                <div className='my-2'>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>

                <button className="btn-main my-3">
                    Add To Cart
                </button>

                <div className='item-num d-flex align-items-center'>
                  <button className="btn-main" onClick={increaseItem}>
                    +
                  </button>


                  <p className='mb-0 mx-3'>{num}</p>


                  <button className="btn-main" onClick={decreaseItem}>
                    -
                  </button>
                </div>
                <button className="btn-main my-3" onClick={favouriteHandler}>
                <i className="fa fa-heart" ></i>
                </button>
         </div>
        </div>
    </div>

    {/* item details end */}






    {/* desc & reviews start */}

      <Description/>
    
    {/* desc & reviews end */}

          <hr />
        </div>   
        
        
        
        
    )
}
