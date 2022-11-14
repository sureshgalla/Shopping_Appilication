import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catlog from './Components/Catlog/Catlog';
import Cart from './Components/Cart/Cart';
import Header from './Components/Common/Header';
import { Provider } from 'react-redux';
import {store} from './Components/redux/store';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Catlog/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </Router>
        </Provider>
    )
  }
}
