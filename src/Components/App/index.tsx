import React from 'react';
import logo from './Loxya.svg';
import './App.scss';
import LoginFormWrapper from '../LoginForm';
import FlexTuto from '../FlexTuto';

const App: React.FC = () => {
    let logged = false;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="userMenu">How do you do</p>
            </header>

            { !logged && <div className="App-Screen"><LoginFormWrapper /></div> }

            { logged && <div className="App-Screen"><FlexTuto /></div>}

        </div>
    );
};

export default App;
