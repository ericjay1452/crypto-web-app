import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Provider } from "react-redux"
import { store } from './feature/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);

