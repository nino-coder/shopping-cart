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
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(product=>{
                    return(
                        <div className="product" key={product.id}>
                            <img src={product.url}></img>
                            <div className="about-product">
                                <div style = {{"display":"grid","gridRowGap":"5px"}}>
                                    <h4>price: {product.price}</h4>
                                    <p>size: {product.size}</p>
                                </div>
                                <b>count: {product.quantity}</b> 
                                <DeleteIcon onClick={()=>{this.remove(product.id)}} style={{"cursor":"pointer"}}/>
                            </div>
                         </div>

                    )
                })):(
                    <p>You have 0 items in cart</p>
                )    
        return(
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr 1fr","gridTemplateRows":"1fr 1fr"}}>
                {addedItems}
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedProducts,
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cart);
