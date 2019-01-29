import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';


import * as serviceWorker from './serviceWorker';

const app=[<App />, <App2 />, <App3 />, <App4 />];
ReactDOM.render(app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
