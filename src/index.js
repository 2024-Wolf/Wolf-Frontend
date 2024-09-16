import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/globalstyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div className="container">
        <Header />
        <MainContent />
        <Footer />
    </div>

);
