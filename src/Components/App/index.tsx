import './App.scss';
import React from 'react';
import logo from './Loxya.svg';
import { Link, Route, useParams, useRouteMatch, BrowserRouter } from "react-router-dom";

import LoginPage from '../../Pages/LoginPage';

const App = (): JSX.Element => {
    let logged = false;

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

                    <p className="userMenu">How do you do</p>
                </header>
            </div>

            <div className="App-Screen">
                    <Route exact path="/">
                        <h1>Welcome</h1>

                        <p><Link to="/login">Se connecter</Link></p>
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>

            </div>
        </BrowserRouter>
    );
};

export default App;
