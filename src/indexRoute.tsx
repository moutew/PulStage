import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/index';
import FlexTuto from './Components/FlexTuto';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import LoginForm from './Components/LoginForm';
import LoginFormLostPassword from './Components/LoginFormLostPassword';

import Category from './Category';
import Products from './Products';
import PrivateRoute from './PrivateRoute';

import reportWebVitals from './reportWebVitals';
// import Login from './Login';

// https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4

const Home = (): JSX.Element => (
    <div>
      <h2>Home</h2>
    </div>
);

const Admin = (): JSX.Element => (
    <div>
      <h2>Welcome admin!</h2>
    </div>
);

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/admin">Adminessseddf</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/category">
                <Category />
            </Route>

            <Route path="/products">
                <Products />
            </Route>

            <Route exact path="/login">
                <LoginForm />
            </Route>

            <Route path="/login/lostPassword">
                <LoginFormLostPassword />
            </Route>

            <PrivateRoute
                path="/admin"
                component={Admin}
                isAuthenticated={false}
                authenticationPath="login"
            />

        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
