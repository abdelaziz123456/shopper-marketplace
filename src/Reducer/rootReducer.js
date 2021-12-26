
import { ADD_ITEM,DELETE_ITEM,CLEAR_ITEMS } from "../Actions/types";




const  CartItems=(state=[],action)=>{

    let items=[];

    if(action.type===ADD_ITEM){
        items=[...state,action.item] ;

        return items

    }
    
    
    
    else if(action.type===DELETE_ITEM){

        items=state.filter((item)=>
        item.id!==action.id
    )
    return items
    }
    
    
    else if(action.type===CLEAR_ITEMS){
        items=[];
        return items
    }
    
    
    
    else {
        return state
    }


}


export default CartItems