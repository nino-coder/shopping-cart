import React, {Component} from 'react';
import  "../css_files/main.css";
import Product from './product.js'
import productData from '../data/productData.json' 
import Header from './header.js';
export default class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    
    }
    render(){
        return(
            <div className= "main-container">
            <Header/>
                <div className="boxes-container">
                    <div className="boxes">
                    {productData.map(info=> (
                        <Product
                            url={info.url}
                            price={info.price}
                            size={info.size}
                        /> 
                    
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}