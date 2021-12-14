import React, { useState } from 'react';
import './index.scss';
import LoginFormLostPassword from '../LoginFormLostPassword';
import InputText from '../InputText';
import InputSubmit from '../InputSubmit';

type User = {
    name: string,
    pass: string,
    loxiaAdmin?: boolean,
};

type LoginFormPropsInterface = {
    children?: React.ReactNode,
    lostPassword: boolean,
    setLostPassword: React.Dispatch<React.SetStateAction<boolean>>,
};

const users: User[] = [
    { name: 'Polo', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Donovan', pass: 'poiaze', loxiaAdmin: true },
    { name: 'Moutew', pass: 'poiaze', loxiaAdmin: false },
];

const canSubmit = (identifiant: string, password: string): boolean => identifiant.length > 3 && password.length > 3;

const LoginForm = (props: LoginFormPropsInterface): JSX.Element => {
    const { setLostPassword, lostPassword } = props;
    const [submitting, setSubmitting] = useState(false);
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
                        <InputText onChange={setIdentifiant} value={identifiant} htmlType="text" />
                    </label>
                </div>

                <div className="form-label">
                    <label htmlFor="password">Mot de passe *</label>
                    <InputText onChange={setPassword} value={password} htmlType="password" />
                </div>

                <a className="LoginForm-pull-right" href="#" onClick={() => setLostPassword(! lostPassword)}>Mot de passe oublié ?</a>

                <div className="center">
                    <InputSubmit
                        disabled={!canSubmit(identifiant, password) || submitting}
                        text="Se connecter"
                    />
                </div>

            </form>

            <div className="LoginForm-error">
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
