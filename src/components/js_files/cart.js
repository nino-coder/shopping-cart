import React, {useEffect} from 'react';
import '../css_files/product.css'
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeItem} from '../../redux/actions/cartActions'

    export default function Cart(){
        const remove=(id)=>{
            dispatch(removeItem(id));
        }
        const { sumPrice, items } = useSelector(state => ({
            sumPrice: state.sumPrice,
            items: state.addedProducts,
        }));
        const dispatch = useDispatch();
        useEffect(() => {
            document.title = `Total price: ${sumPrice}`;
        });
        const addedItems = items.length ?
            (  
                items.map(product=>{
                    return(
                        <div className="product" key={product.id}>
                            <img src={product.url}></img>
                            <div className="about-product">
                                <div style = {{"display":"grid","gridRowGap":"5px"}}>
                                    <h4>price: {product.price}$</h4>
                                    <p>size: {product.size}</p>
                                    <p>count: {product.quantity}</p> 
                                </div>
                                <DeleteIcon onClick={()=>{remove(product.id)}} style={{"cursor":"pointer"}}/>
                            </div>
                         </div>
                    )
                })):(
                    <p className="message">You have 0 items in cart</p>
                )    
        return(
            <div style={{"margin": "30px"}}>
            <div className="product-container">
                {addedItems}
                <h4>Total price: {sumPrice}</h4>
            </div>
            </div>
        );
    }
