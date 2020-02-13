import combineReducers  from 'redux';
import cartReducers from './cartReducers'

const allReducers = combineReducers({
    cart:cartReducers
})

export default allReducers