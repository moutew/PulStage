import './index.scss';
import React from 'react';
import { Link, Route, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";
import logo from './Loxya.svg';

const Header = (): JSX.Element => (
    <header className="header">
        <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
        </Link>

        <p className="header-user-menu">How do you do</p>
    </header>
);

export default Header;
