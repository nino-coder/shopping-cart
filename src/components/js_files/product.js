import React,{Component} from 'react';
import '../css_files/product.css'


class Product extends Component{
    render(){
        const {url, price, size} = this.props
        return(
            <div className="product">
                <img src={this.props.url}></img>
                <div className="about-product">
                    <div>
                        <h4>price: {this.props.price}</h4>
                        <p>size: {this.props.size}</p>
                    </div>
                    <div className="button-container">
                        <button className="add-button">add</button>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Product;