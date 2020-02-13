import React,{Component} from 'react';
import '../css_files/product.css'
import { connect } from 'react-redux';

class Cart extends Component{

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
        // addedItems: state.addedItems
    }
}
export default  connect(mapStateToProps)(Cart);
