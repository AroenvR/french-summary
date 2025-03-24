// filepath: /workspaces/french-summary/src/components/Header.tsx
import React from 'react';
import TopHeader from './TopHeader';
import LeftHeader from './LeftHeader';

const Header: React.FC = () => {
    return (
        <div className="flex">
            <TopHeader />
            <LeftHeader />
        </div>
    );
};

export default Header;