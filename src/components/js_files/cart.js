import React,{Component} from 'react';
import '../css_files/product.css'
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeItem} from '../../redux/actions/cartActions'

class Cart extends Component{
    remove=(id)=>{
        this.props.removeItem(id);
    }

    render(){
        const sum = typeof(this.props.sumPrice);
        console.log(sum);
        const addedItems = this.props.items.length ?
            (  
                this.props.items.map(product=>{
                    return(
                        <div className="product" key={product.id}>
                            {/* {let a = product.quantity*product.price} */}
                            <img src={product.url}></img>
                            <div className="about-product">
                                <div style = {{"display":"grid","gridRowGap":"5px"}}>
                                    <h4>price: {product.price}$</h4>
                                    <p>size: {product.size}</p>
                                    <p>count: {product.quantity}</p> 
                                </div>
                                
                                <DeleteIcon onClick={()=>{this.remove(product.id)}} style={{"cursor":"pointer"}}/>
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
                <h4>Total price: {this.props.sumPrice}</h4>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedProducts,
        sumPrice: state.sumPrice
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cart);