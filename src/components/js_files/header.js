import React,{Component} from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import '../css_files/header.css'
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h3>Shopping</h3>
                    <Link to={{pathname:"/cart"}} style={{"paddingLeft": "40px"}}>
                        <ShoppingCartOutlinedIcon />
                    </Link>
            </div>
        );
        }
}
export default Header;