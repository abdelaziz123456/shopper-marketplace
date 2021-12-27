import React from 'react' ;
import { items } from '../../Data';

import ProductItem from '../ProductItem';
let logo=require('../../images/logo512.png');

export default function MainContent(props) {
    let category=props.category;
        
    let products=items;

    switch (category){
        case 'furniture':
        products=items.filter(item=>item.category==='furniture') ;
        break;

        case 'shoe':
        products=items.filter(item=>item.category==='shoes');
        break;

        case 'clothes':
        products=items.filter(item=>item.category==='clothes');
        break;


        case 'electronics':
        products=items.filter(item=>item.category==='electronics');
        break;



        default:
        products=items;
        break;

    }

  
    

        return (
            <div className='maincontent '>
                
                <div className="products row justify-content-around">
                <img src={require('../../images/logo512.png').default} alt="fdf" />
                {
                
                products.map((item)=>
                <ProductItem  name={item.name} price={item.price} seller={item.seller} image={item.image} id={item.id}/>)}
    
                </div>
                
            </div>
        )

    
    
}
