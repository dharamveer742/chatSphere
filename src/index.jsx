import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import appRouter from './App.jsx';
import { RouterProvider } from 'react-router-dom' ; 
import { Provider } from 'react-redux';
import store from './utils/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={store}> <RouterProvider router={appRouter}></RouterProvider> </Provider>
    

)
