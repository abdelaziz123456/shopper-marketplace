import { ADD_ITEM,DELETE_ITEM,CLEAR_ITEMS } from "./types";



//actions creators


export const add_item=(item)=>{
    const action={
        type:ADD_ITEM,
        item
    }


    return  action
} 



export const delete_item=(id)=>{
    const action={
        type:DELETE_ITEM,
        id
    }

    return action
    
}



export const clear_items=()=>{
    const action={
        type:CLEAR_ITEMS
    }

    return action
}
