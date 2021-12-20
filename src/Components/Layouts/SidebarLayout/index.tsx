import './index.scss';
import React from 'react';
import Header from '../../Header';
import MenuAdminSidebar from '../../MenuAdminSidebar';

const SidebarLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div className="SidebarLayout">

        <div className="SidebarLayout-header">
            <Header />
        </div>

        <div className="SidebarLayout-content">
            <div className="SidebarLayout-navigation">
                <MenuAdminSidebar />
            </div>

            <div className="SidebarLayout-page">
                { children }
            </div>

            <div className="SidebarLayout-props">
                Properties like in robert 1
            </div>

        </div>

        <div className="SidebarLayout-footer">footer</div>

    </div>
);

export default SidebarLayout;
