import './index.scss';
import React from 'react';
import Header from '../../Header';

const FullScreenLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div className="FullScreenLayout">

        <Header />
        <div className="FullScreenLayout-content">
            {children}
        </div>
        <div className="FullScreenLayout-copyright">
            @ mais qui copierai ça ??
        </div>
    </div>
);

export default FullScreenLayout;
