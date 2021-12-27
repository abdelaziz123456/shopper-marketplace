import React from 'react';
import { useDispatch} from 'react-redux';
import {delete_item} from '../../Actions/index';


export default function CartItem(props) {
    const dispatch = useDispatch();
    
    return (
        <>
            <tr>
                        <td>{props.item.id}</td>
                        <td>{props.item.name}</td>
                        <td>{props.item.number}</td>
                        <td>{props.item.price}</td>
                        <td><button className="btn" onClick={()=>
                            {dispatch(delete_item(props.item.id))}
                        }>
                        <i className="fa fa-minus-circle " aria-hidden="true"></i>

                            </button></td>
                    </tr> 
        </>
    )
}
