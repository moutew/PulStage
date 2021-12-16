import './index.scss';
import React from 'react';
import logo from './Loxya.svg';
import { Link, Route, useParams, useRouteMatch, BrowserRouter, Redirect } from "react-router-dom";

import LoginPage from '../../Pages/LoginPage';
import FullScreenLayout from '../Layouts/FullScreenLayout';
import NavLeftLayout from '../Layouts/NavLeftLayout';
import AdminPage from '../../Pages/AdminPage';
import PrivateRoute from '../../PrivateRoute';

const App = (): JSX.Element => {
    let logged = true;

    return (
        <BrowserRouter>

            <Route exact path="/">
                {logged ? <Redirect to="/admin" /> : <Redirect to="/login" /> }
            </Route>

            <Route path="/login">
                <LoginPage />
            </Route>

            <PrivateRoute path="/admin" isAuthenticated={logged} authenticationPath="/login">
                <AdminPage />
            </PrivateRoute>

        </BrowserRouter>
    );
};

export default App;
