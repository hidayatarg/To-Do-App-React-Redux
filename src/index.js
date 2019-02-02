import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {provider} from 'react-redux';
import {createStore} from 'react-redux';
import reducers from './reducers/';


let store = createStore(reducers);
ReactDOM.render(
    <provider store={store}>
    <App />
    </provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
