import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import CartItems from './Reducer/rootReducer';
import { Provider } from 'react-redux';


const store1=createStore(CartItems)

ReactDOM.render(
  <Provider store={store1}>
    <App />
    </Provider>,
  document.getElementById('root')
);


