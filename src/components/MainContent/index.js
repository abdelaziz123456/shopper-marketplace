import React from 'react' ;
import { items } from '../../Data';

import ProductItem from '../ProductItem';

export default function MainContent() {
    return (
        <div className='maincontent '>
            
            <div className="products row justify-content-around">

            {items.map((item)=>
            <ProductItem  name={item.name} price={item.price} seller={item.seller} image={item.image}/>)}

            </div>
            
        </div>
    )
}
