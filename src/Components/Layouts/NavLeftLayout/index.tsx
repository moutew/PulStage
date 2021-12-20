import './index.scss';
import React from 'react';
import Header from '../../Header';
import { Link, Route } from 'react-router-dom';
import type { RouteType } from '../../../Pages/AdminPage';

const NavLeftLayout = ({ routes }: { routes: RouteType[] }): JSX.Element => (
    <div className="NavLeftLayout">
        <div className="NavLeftLayout-header">
            <Header />
        </div>

        <div className="NavLeftLayout-container">

            <div className="NavLeftLayout-navigation">
                <h2>Navigation</h2>
                <ul>
                    {routes.map((route: RouteType) => (
                        <li key={`link-${route.name}`}>
                            <Link to={route.to}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="NavLeftLayout-content">

                { routes.map(({ name, ...routeProps }: RouteType) => (
                    <Route key={`route-${name}`} {...routeProps} />
                ))}

            </div>

        </div>
    </div>
);

export default NavLeftLayout;
