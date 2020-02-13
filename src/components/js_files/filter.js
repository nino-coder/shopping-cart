import React,{Component} from 'react';
import { connect }  from 'react-redux';
import Product from './product';
import '../css_files/product.css'
class Filter extends Component{
    state={
        filter:'',
    }
    handleChange = (e) => {
        this.setState({ filter: e.target.value });
        console.log(e.target.value)
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
                                    <h4>price: {product.price}</h4>
                                    <p>size: {product.size}</p>
                                </div>
                            </div>
                         </div>

                    )
                })):(
                    <p className="message">We do not have a product of this size</p>
                )    
        
        return (
            <div>
            <select value={filter} onChange={this.handleChange}>
              <option value=""></option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
            </select>
            
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr 1fr","gridTemplateRows":"1fr 1fr"}}>
                {filteredItems} 
            </div>
                
            
          </div>
     
        );
      }
    };
const mapStateToProps=(state)=>{
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(Filter);