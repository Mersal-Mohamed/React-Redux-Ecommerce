import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css'
import 'normalize.css'; // Note this

// redux 
import { createStore } from 'redux'
import { Provider } from 'react-redux'  
import rootReducer from '../src/reducers/index'

const store = createStore(
        rootReducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       );

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
, 
document.getElementById('root'));

