import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from '../LoginForm';

const App: React.FC = () => (

    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>

        </header>

        <LoginForm />

    </div>
);

export default App;
