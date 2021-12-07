import React from 'react';
import logo from './Loxya.svg';
import './App.css';
import LoginFormWrapper from '../LoginForm';

const App: React.FC = () => {
    let logged = false;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            { !logged
                ? <div className="App-loginScreen"><LoginFormWrapper /></div>
                : null }

        </div>
    );
};

export default App;
