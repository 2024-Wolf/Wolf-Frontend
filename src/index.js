import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import GlobalStyle from './resources/Globalstyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div className="container">
        <GlobalStyle />
        <Header />
        <MainContent />
        <Footer />
    </div>

);
