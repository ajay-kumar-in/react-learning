import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store/store';


const token = JSON.parse(localStorage.getItem('token'));

axios.interceptors.request.use(req => {
  req.headers.Authorization = ('Bearer ' + token);
  return req;
}, err => {
  console.log('err in interceptor, index.js');
}, { synchronous: true });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
