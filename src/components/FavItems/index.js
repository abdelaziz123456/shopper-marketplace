import React from 'react'
import ProductItem from '../ProductItem'

export default function FavItems(props) {

    let products=props.favList;
    let setFavList=props.setFavList
    return (
        <div className='maincontent '>
                
                <div className="products row justify-content-around">


    
                {
                products.length ? 
                    
                <>
                <div className='d-flex justify-content-between'>
                
                <button className="btn-main">
                    your favourite items
                </button>


                <button className="btn-main" onClick={()=>{setFavList([])}}>
                    Clear List
                </button>
                </div>

                {products.map((item)=>
                <ProductItem  name={item.name} price={item.price} seller={item.seller} image={item.image} id={item.id}/>)}

                </>

                : 
                <h3 className='text-center'>Your favourite list is empty</h3>
            
            } 
    
                </div>
                
            </div>
    )
}
