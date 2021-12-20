import './index.scss';
import React from 'react';
import logo from './Loxya.svg';
import { Link, Route, useParams, useRouteMatch, BrowserRouter, Redirect } from "react-router-dom";

import LoginPage from '../../Pages/LoginPage';
import FullScreenLayout from '../Layouts/FullScreenLayout';
import NavLeftLayout from '../Layouts/NavLeftLayout';
import SidebarLayout from '../Layouts/SidebarLayout';
import AdminPage from '../../Pages/AdminPage';
import PrivateRoute from '../../PrivateRoute';

import Category from '../../Category';
import FlexTuto from '../../Components/FlexTuto';
import Products from '../../Products';

// https://v5.reactrouter.com/web/example/animated-transitions

const App = (): JSX.Element => {
    let logged = true;

    return (
        <BrowserRouter>

            {/* <Route exact path="/">
                {logged ? <Redirect to="/admin" /> : <Redirect to="/login" /> }
            </Route> */}

            {/* <FullScreenLayout>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </FullScreenLayout> */}


            <SidebarLayout>
                <Route path="/admin/categories">
                    <Category />
                </Route>

                <Route path="/admin/products">
                    <Products />
                </Route>
            </SidebarLayout>


{/*
            <PrivateRoute path="/admin" isAuthenticated={logged} authenticationPath="/login">
                <AdminPage />
            </PrivateRoute> */}

        </BrowserRouter>
    );
};

export default App;
