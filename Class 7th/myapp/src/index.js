import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      image="https://www.istockphoto.com/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas-gm1404885250-456973849"
      heading = "This is 1st Head"
      Description="Hello this the 1st descriptions"

    
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
