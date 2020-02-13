import React, {Component} from 'react';
import  "../css_files/main.css";
import Product from './product.js';
import Header from './header.js';
import {connect} from 'react-redux';

class MainComponent extends Component{
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
                        <div>
                        <Product/> 
                        </div>
                    </div>
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

export default connect(mapStateToProps)(MainComponent)