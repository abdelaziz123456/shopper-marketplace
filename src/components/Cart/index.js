import React, { useState } from 'react';
import {delete_item} from '../../Actions'
import './index.scss';
import { useDispatch,useSelector } from 'react-redux';




export default function Cart() {



    //all items from cart
     
    
    const dispatch=useDispatch();
    
    const  deleteHandler=(id)=>{
        console.log(id);
      dispatch(delete_item(id))
    }


    let items=useSelector(state=>state)   
   
    return (

        <div className='cart'>
            

            {items.length ? 
            <>
           <h3>Your Product List</h3>
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
              
                
                items.map(item=> 
                
                (
                    
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.price}</td>
                        <td><button className="btn" onClick={()=>{
                            deleteHandler(item.id)
                        }}>
                        <i className="fa fa-minus-circle " aria-hidden="true"></i>

                            </button></td>
                    </tr>
                ))
                }
                
            </tbody>

        </table>   
         <br />



         




        
        </> :
        
        
        <h3 className='text-center'>Your Product List is Empty</h3> }
            


            
        </div>
    )
}
