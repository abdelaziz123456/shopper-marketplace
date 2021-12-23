import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './index.scss'
export default function Description() {
    //tabs hooks

const [activeTab, setActiveTab] = useState('1');
    return (

        <div className='item-description'>
      <Nav tabs className='d-flex justify-content-center'>
        <NavItem className='pointer'>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Descripion
          </NavLink>
        </NavItem>
        <NavItem className='pointer'>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Reviews
          </NavLink>
        </NavItem>
      </Nav>



      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="container">
          <p className='py-3'>
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
        

          </div>

           
        </TabPane>
        <TabPane tabId="2">
          <div className='p-3 '>

            <div className="container">
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

              
          
          </div>
          


        </TabPane>
      </TabContent>
    </div>

    )
}
