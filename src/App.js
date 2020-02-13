import React from 'react';
import MainContainer from './components/js_files/main';
import Cart from './components/js_files/cart';
import './App.css';
import {
  BrowserRouter ,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
