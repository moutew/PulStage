import React, { useState } from 'react';
import './index.scss';
import LoginFormLostPassword from '../LoginFormLostPassword';

interface User {
    name: string;
    pass: string;
    loxiaAdmin?: boolean;
}

interface LoginFormPropsInterface {
    children?: React.ReactNode;
    lostPassword: boolean;
    setLostPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const users: User[] = [
    { name: 'Polo', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Donovan', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Moutew', pass: 'poiaze', loxiaAdmin: false },
];

const LoginForm: React.FC<LoginFormPropsInterface> = (props) => {
    const { setLostPassword, lostPassword } = props;
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

    // @ WHY : typescript n'aime pas ça !
    //
    // if (loggedUser !== null) {
    //     console.log(loggedUser);
    //     return (
    //         <h1>Hello {loggedUser?.name}</h1>
    //     );
    // }

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
                            required
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
                        required
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                                // @WHY ? password n'a pas encore la valeur de e.target.value ?
                                setSubmittable(canSubmit(identifiant, e.target.value));
                            }
                        }
                    />
                </div>

                <a className="pull-right" href="#" onClick={() => setLostPassword(! lostPassword)}>Mot de passe oublié ?</a>

                <div className="center">
                    <button
                        className={`submit ${!submittable || submitting ? 'disabled' : ''}`}
                        type="submit"
                        disabled={!submittable || submitting}
                    >
                        Entrer
                    </button>
                </div>

            </form>

            <div className="error">
                {errorMessage}
            </div>

        </div>
    );
};

const LoginFormWrapper: React.FC = () => {
    const [lostPassword, setLostPassword] = useState(false);

    return lostPassword
        ? <LoginFormLostPassword />
        : <LoginForm setLostPassword={setLostPassword} lostPassword={lostPassword} />;
};

export default LoginFormWrapper;
