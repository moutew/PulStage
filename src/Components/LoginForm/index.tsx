import React, { useState } from 'react';
import './index.scss';

const LoginForm: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (event: React.FormEvent): boolean => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(
            () => {
                setSubmitting(false);
            },
            1000,
        );
        return true;
    };

    return (

        <div className="loginForm">
            <h4>
                {submitting
                    ? <span>In Progress ...</span>
                    : <span>LoginMan</span>}
            </h4>

            <form onSubmit={handleSubmit}>
                <div className="form-label">
                    <label htmlFor="username">
                        Identifiant
                        <input type="text" name="username" />
                    </label>
                </div>

                <div className="form-label">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" />
                </div>

                <button id="submit" type="submit">Entrer</button>

            </form>
        </div>
    );
};

export default LoginForm;
