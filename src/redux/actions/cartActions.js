import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './types'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id
    }
}
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM, id
    }
}
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY, id
    }
}
