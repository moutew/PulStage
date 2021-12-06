import React, { useState } from 'react';
import './index.scss';

interface User {
    name: string;
    pass: string;
    loxiaAdmin?: boolean;
}

const users: User[] = [
    { name: 'Polo', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Donovan', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Moutew', pass: 'poiaze', loxiaAdmin: false },
];

const LoginForm: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submittable, setSubmittable] = useState(false);
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, seterrorMessage] = useState('');
    const [loggedUser, setloggedUser] = useState<null | User>(null);

    const handleSubmit = (event: React.FormEvent): boolean => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(
            (id: string, pass: string) => {
                const userExists = users.find((u: User) => (u.name === id && u.pass === pass));
                if (userExists !== undefined) {
                    setloggedUser(userExists);
                    seterrorMessage('');
                } else {
                    setloggedUser(null);
                    seterrorMessage('Identifiants de connexion invalides');
                }
                setSubmitting(false);
            },
            1000,
            identifiant,
            password,
        );
        return true;
    };

    const canSubmit = (identifiant: string, password: string): boolean => identifiant.length > 3 && password.length > 3;

    return (

        <div className="loginForm">
            <h4>
                {submitting
                    ? <span>In Progress ...</span>
                    : <span>LoginMan {loggedUser?.name} {loggedUser?.loxiaAdmin ? '(admin)' : null}</span>}
            </h4>

            <form onSubmit={handleSubmit}>
                <div className="form-label">
                    <label htmlFor="username">
                        Identifiant *
                        <input
                            type="text"
                            name="username"
                            value={identifiant}
                            onChange={
                                (e: React.ChangeEvent<HTMLInputElement>) => {
                                    setIdentifiant(e.target.value);
                                    // @WHY ? identifiant n'a pas encore la valeur de e.target.value ?
                                    setSubmittable(canSubmit(e.target.value, password));
                                }
                            }
                        />
                    </label>
                </div>

                <div className="form-label">
                    <label htmlFor="password">Mot de passe *</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                                // @WHY ? password n'a pas encore la valeur de e.target.value ?
                                setSubmittable(canSubmit(identifiant, e.target.value));
                            }
                        }
                    />
                </div>

                <button
                    className={`${!submittable || submitting ? 'disabled' : ''}`}
                    id="submit"
                    type="submit"
                    disabled={!submittable || submitting}
                >
                    Entrer
                </button>

            </form>

            <div className="error">
                {errorMessage}
            </div>

        </div>
    );
};

export default LoginForm;
