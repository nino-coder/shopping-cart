import React,{Component} from 'react';
import '../css_files/product.css'
import Cart from './cart';
import { connect } from 'react-redux';
import { addToCart }  from '../../redux/actions/cartActions'
import  { Link }  from 'react-router-dom';
class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            filter:'',
        }
    }
    handleChange = (e) => {
        this.setState({ filter: e.target.value });
        console.log(e.target.value)
      }
    handleClick=(id)=>{
        this.props.addToCart(id);
    }
    render(){
        const {filter } = this.state;
        let shownItems = this.props.items;
        if (filter) {
           shownItems = this.props.items.filter(({ size }) => size.includes(filter));
           console.log(shownItems)
        }
        let filteredItems = shownItems.length ?
            ( 
                shownItems.map(product=>{
                    return(
                        <div className="product" key={product.id}>
                            <img src={product.url}></img>
                            <div className="about-product">
                                <div style = {{"display":"grid","gridRowGap":"5px"}}>
                                    <h4>price: {product.price}$</h4>
                                    <p>size: {product.size}</p>
                                </div>
                                <div className="button-container">
                                    <Link to="/"><button className="add-button" 
                                        onClick={()=>this.handleClick(product.id)}
                                        >add</button>
                                    </Link>
                                 </div>
                            </div>
                         </div>

                    )
                })):(
                    <p className="message">We do not have this size</p>
                )    
        return(
            <div>
                <select value={filter} onChange={this.handleChange}>
                <option value="">size:</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                </select>
                
                <div className="product-container">
                    {filteredItems} 
                </div>
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