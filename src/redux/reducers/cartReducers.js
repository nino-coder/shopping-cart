import { ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY } from '../actions/types';

const initState = {
    items: [
        {   
            "id":1,
            "price":10,
            "url":"https://ae01.alicdn.com/kf/HTB11umIcEKF3KVjSZFEq6xExFXaZ.jpg_q50.jpg",
            "size":"36"
        },
        {   
            "id":2,
            "price":15,
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmMJO0BNY6VJx7bGmBsZfpkwwM11vU5sTSgBcCUxadM0031XrO",
            "size":"36"
        },
        {
            "id":3,
            "price":13,
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0WWZ1D_8QaoV-D1-QwcROu_fMdo62oGqxzsXIxuMObch3GTSb",
            "size":"37"        
        },
        {
            "id":4,
            "price":15,
            "url":"https://hindams.com/wp-content/uploads/2019/11/236194-tw0ede.jpg",
            "size":"35" 
        },
        {
            "id":5,
            "price":20,
            "url":"https://cdn.shopify.com/s/files/1/1349/6913/products/product-image-635730235_large.jpg?v=1571439913",
            "size":"37" 
        },
        {
            "id":6,
            "price":18,
            "url":"https://cdn.shopify.com/s/files/1/0047/7052/9378/products/Sexy-Women-Pumps-High-Heels-Wedding-Shoes-Women-Block-Square-Heels-Transparent-Ladies-Pointed-Shoes-Party.jpg_640x640_da8f8709-2c7c-424c-9d81-d11706e781e8_1024x1024.jpg?v=1571713662",
            "size":"35" 
        }
    ],
    addedProducts:[],
    sumPrice: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedProduct = state.items.find(product=> product.id === action.id)
         let existed_product= state.addedProducts.find(product=> action.id === product.id)
         if(existed_product)
         {
            addedProduct.quantity += 1 
             return{
                ...state,
                 sumPrice: state.sumPrice + addedProduct.price 
                  }
        }
         else{
            addedProduct.quantity = 1;
            let newSum = state.sumPrice + addedProduct.price 
            
            return{
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                sumPrice : newSum
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let productToRemove= state.addedProducts.find(product=> action.id === product.id)
        let new_products = state.addedProducts.filter(product=> action.id !== product.id)
        let newSum = state.sumPrice - (productToRemove.price * productToRemove.quantity )
        console.log(productToRemove)
        return{
            ...state,
            addedProducts: new_products,
            sumPrice: newSum
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedProduct = state.items.find(product=> product.id === action.id)
          addedProduct.quantity += 1 
          let newSum = state.sumPrice + addedProduct.price
          return{
              ...state,
              sumPrice: newSum
          }
    }
 
    
  else{
    return state
    }
    
} 

export default cartReducer;