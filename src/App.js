import React,{Suspense, lazy} from 'react';
// import MainContainer from './components/js_files/main';
// import Cart from './components/js_files/cart';
import './App.css';
import {
  BrowserRouter ,
  Route,
  Switch,
} from 'react-router-dom';

const MainContainer = lazy(() => import('./components/js_files/main'));
const Cart = lazy(() => import('./components/js_files/cart'));
function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path='/cart' component={Cart} />
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
