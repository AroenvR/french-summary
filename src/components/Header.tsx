import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="py-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-200/90 via-yellow-300/90 to-yellow-400/90 backdrop-blur-md border-b border-yellow-300">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md mb-4">
                    French Summary
                </h1>
                <nav>
                    <ul className="flex justify-center space-x-8">
                        <li>
                            <Link
                                to="/"
                                className="inline-block px-5 py-2 bg-yellow-100 hover:bg-yellow-200 rounded-full text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(251,191,36,0.5)]"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative group">
                            <button className="inline-block px-5 py-2 bg-yellow-100 hover:bg-yellow-200 rounded-full text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(251,191,36,0.5)] flex items-center">
                                Select level
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <ul className="absolute left-0 top-full mt-0 w-full bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <li>
                                    <Link
                                        to="/a1"
                                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
                                    >
                                        A1
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;