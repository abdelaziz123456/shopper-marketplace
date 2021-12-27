import React from 'react';
import {delete_item,clear_items} from '../../Actions/index'
import './index.scss';

import CartItem from '../CartItem';

import { useSelector ,useDispatch} from 'react-redux';



export default function Cart() {




    const dispatch=useDispatch();
//all items from cart



const cartItems=useSelector(state=>state)
    
   let total=0;


   
   
    return (

        <div className='cart '>
            
           
            {cartItems.length>0 ? 
            <div className=''>
              
            <div className="d-flex justify-content-between">
            <h3>Your Product List</h3>

            <button className="btn-main" onClick={()=>dispatch(clear_items())}>
                Clear Cart
            </button>
            </div>
           
            <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>number</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
              
                
              cartItems.map((item)=> 
                
                (
                    
                  <CartItem item={item}/>
                ))
                }
                {
                    cartItems.map((item)=>{
                        total+=item.price
                    })
                }
                
            </tbody>

        </table>   

        <h4>Your total cost is <span> {total} </span></h4>
         <br />



         




        
        </div> :
        
        
        <h3 className='text-center'>Your Product List is Empty</h3> }
            
                    
       
      
            
        </div>
    )
}
