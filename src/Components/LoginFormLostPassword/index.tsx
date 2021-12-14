import './index.scss';
import React, { useState } from 'react';
import InputSubmit from '../InputSubmit';
import InputText from '../InputText';

const LoginFormLostPassword: React.FC = () => {
    const [email, setEmail] = useState('');

    const submit = (event: React.FormEvent): void => {
        event.preventDefault();
        alert(`T'as perdu ton credential ${email} ?`);
    };

    return (
        <form onSubmit={submit}>

            <div className="form-label">
                <label htmlFor="emailAdress">Entrez votre adresse email *</label>
                <InputText
                    onChange={setEmail}
                />
            </div>

            <div className="center">
                <InputSubmit
                    text="Réinitialiser le mot de passe"
                    disabled={false}
                />
            </div>
        </form>
    );
};

export default LoginFormLostPassword;
