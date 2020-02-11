import React,{Component } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';
import '../css_files/header.css'
function Header(props){
        return(
            <div className="header">
                <button >
                    <ShoppingCartOutlinedIcon {...props} style={{"paddingLeft": "90%"}}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        <p>cart</p>
                    </ShoppingCartOutlinedIcon>
                </button>
                <button style = {{"paddingLeft": "80%","marginTop":"-25px"}}>
                    <FilterListIcon {...props} >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </FilterListIcon>
                </button>
            </div>
        );
    
}
export default Header;