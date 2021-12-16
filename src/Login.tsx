import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

type LocationState = {
    from: {
        pathname: string,
    },
};

/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: false,

    authenticate: (cb: () => void) => {
        if (this === undefined) {
            return;
        }
        // this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
};

export const Login = (): JSX.Element => {
    const { state } = useLocation<LocationState>();
    const { from } = state || { from: { pathname: '/' } };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    console.log('hey !!');

    const onLogin = (): void => {
        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        });
    };

    if (redirectToReferrer) {
        return <Redirect to={from} />;
    }

    return (
        <div>
            <p>You must log in to view the page at dd{from.pathname}</p>
            <button type="button" onClick={onLogin}>
                {/* <button type="button" onClick={() => { setRedirectToReferrer(!redirectToReferrer); }}> */}
                Log in
            </button>
        </div>
    );
};

export default Login;
