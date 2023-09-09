import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import '../styles/css/index.css';

const data = {
  name: "QR Generator By Unnamed"
}

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Nav name={data.name} />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
