import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Main />
            </div>
            <div>
            <Footer />
            </div>
        </Router>
    );
}

export default App;

