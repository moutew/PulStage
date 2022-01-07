import './index.scss';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LoginPage from '../../Pages/LoginPage';
import FullScreenLayout from '../Layouts/FullScreenLayout';
import SidebarLayout from '../Layouts/SidebarLayout';
import PrivateRoute from '../../PrivateRoute';

import Category from '../../Category';
import Products from '../../Products';

// https://v5.reactrouter.com/web/example/animated-transitions

const App = (): JSX.Element => {
    const logged = false;

    return (
        <BrowserRouter>

            <Route path="/login">
                <FullScreenLayout>
                    <LoginPage />
                </FullScreenLayout>
            </Route>

            <PrivateRoute path="/" isAuthenticated={logged} authenticationPath="/login">
                <SidebarLayout>
                    <Route path="/admin/categories">
                        <Category />
                    </Route>

                    <Route path="/admin/products">
                        <Products />
                    </Route>
                </SidebarLayout>
            </PrivateRoute>

        </BrowserRouter>
    );
};

export default App;
