import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/css/globalstyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div className="container">
        <Header />
        <App />
        <Footer />
    </div>

);
