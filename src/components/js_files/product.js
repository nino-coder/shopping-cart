import React,{useState} from 'react';
import '../css_files/product.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart }  from '../../redux/actions/cartActions'
import { Link }  from 'react-router-dom';


export default function Product(){
    const [filter, setFilter] = useState("");
    const items = useSelector(state=>state.items);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    const handleClick=(id)=>{
        dispatch(addToCart(id));
    }
    let shownItems = items;
    if (filter) {
        shownItems = items.filter(({ size }) => size.includes(filter));
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
                                    onClick={()=>handleClick(product.id)}
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
                <select value={filter} onChange={handleChange}>
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