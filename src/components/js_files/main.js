import React  from 'react';
import  "../css_files/main.css";
import Product from './product.js';
import Header from './header.js';
 export default function MainComponent(){
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