import React from 'react';
import { Link } from 'react-router-dom';

const LeftHeader: React.FC = () => {
    return (
        <nav className="fixed top-32 left-0 h-full w-48 bg-gradient-to-b from-yellow-200/90 via-yellow-300/90 to-yellow-400/90 backdrop-blur-md border-r border-yellow-300 pt-4">
            <ul className="space-y-2 flex flex-col items-center">
                <li>
                    <Link
                        to="/a1/basics"
                        className="block w-36 bg-yellow-100 hover:bg-yellow-200 rounded-full text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(251,191,36,0.5)] text-center"
                    >
                        Basics
                    </Link>
                </li>
                <li>
                    <Link
                        to="/a1/conjugation"
                        className="block w-36 bg-yellow-100 hover:bg-yellow-200 rounded-full text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(251,191,36,0.5)] text-center"
                    >
                        Conjugation
                    </Link>
                </li>
                <li>
                    <Link
                        to="/a1/spin-the-wheel"
                        className="block w-36 bg-yellow-100 hover:bg-yellow-200 rounded-full text-gray-800 font-semibold transition-transform duration-300 transform hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(251,191,36,0.5)] text-center"
                    >
                        Spin the wheel
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftHeader;