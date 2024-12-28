import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import CreatePostPage from './CreatePostPage';

function Main() {
    return (
        <main style={{ padding: '20px' }}>
            <Routes>
                <Route path="/" element={<CreatePostPage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Posts" element={<Posts />} />
            </Routes>
        </main>
    );
}

export default Main;

