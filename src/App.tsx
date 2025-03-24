import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import LandingPage from './pages/a1/LandingPage';
import Basics from './pages/a1/Basics';
import Conjugation from './pages/a1/Conjugation';
import SpinTheWheel from './pages/a1/SpinTheWheel';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pl-48 max-w-6xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/a1" element={<LandingPage />} />
                    <Route path="/a1/basics" element={<Basics />} />
                    <Route path="/a1/conjugation" element={<Conjugation />} />
                    <Route path="/a1/spin-the-wheel" element={<SpinTheWheel />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;