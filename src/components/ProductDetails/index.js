import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './index.scss';
import {  useParams } from 'react-router-dom';
import {items} from '../../Data';

export default function ProductDetails() {


let params=useParams();

let product=items.find(item=>item.id==params.id) ;



//tabs hooks

const [activeTab, setActiveTab] = useState('1');


    
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

    <div className="row">


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

                


         </div>
        </div>
    </div>



    {/* item details end */}





    {/* desc & reviews start */}

    <div>
      <Nav tabs className='d-flex justify-content-center'>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Descripion
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Reviews
          </NavLink>
        </NavItem>
      </Nav>



      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">

            <p className='p-3'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <p>
         Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>

        <p>
         Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        
        </TabPane>
        <TabPane tabId="2">
          <div className='p-3 '>

              <p>
              reviewed by <span>adrian32</span> 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

                <br />

                <p>
              reviewed by <span>sofia43</span> 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>


              <br />

                <p>
              reviewed by <span>sara45</span> 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>



          
          </div>
          


        </TabPane>
      </TabContent>
    </div>

    {/* desc & reviews end */}









           

           <hr />
        </div>   
        
        
        
        
    )
}
