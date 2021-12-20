import React from 'react';
import { BrowserRouter, Route, useRouteMatch } from 'react-router-dom';
import FullScreenLayout from '../../Components/Layouts/FullScreenLayout';
import LoginForm from '../../Components/LoginForm';
import LoginFormLostPassword from '../../Components/LoginFormLostPassword';

const LoginPage = (): JSX.Element => {
    const { url, path } = useRouteMatch();

    return (
        <BrowserRouter>
            <Route exact path={`${url}`}>
                <LoginForm />
            </Route>

            <Route path={`${url}/lostPassword`}>
                <LoginFormLostPassword />
            </Route>
        </BrowserRouter>
    );
};

export default LoginPage;
