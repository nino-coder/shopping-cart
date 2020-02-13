import React,{Component} from 'react';
import '../css_files/product.css'
import Cart from './cart';
import { connect } from 'react-redux';
import { addToCart }  from '../../redux/actions/cartActions'
import  { Link }  from 'react-router-dom';
class Product extends Component{
    constructor(props){
        super(props);
       
    }
    handleClick=(id)=>{
        this.props.addToCart(id);
    }
    render(){
        let products = this.props.items.map(product =>{
            return(
                <div className="product" key={product.id}>
                    <img src={product.url} ></img>
                    <div className="about-product">
                        <div style = {{"display":"grid","gridRowGap":"5px"}}>
                            <h4>price: {product.price}</h4>
                            <p>size: {product.size}</p>    
                            </div>
                        <div className="button-container">
                        <Link to="/"><button className="add-button" 
                            onClick={()=>this.handleClick(product.id)}
                            >add</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="product-container">
                {products}
            </div>
            
        );
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);