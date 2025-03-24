// filepath: /workspaces/french-summary/src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import A1 from './pages/A1';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 max-w-6xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/a1" element={<A1 />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;