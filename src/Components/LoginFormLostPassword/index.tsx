import './index.scss';
import React, { useState } from 'react';

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
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="exemple@exemple.fr"
                    required
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.target.value);
                        }
                    }
                />
                <button
                    id="submit"
                    type="submit"
                    className="pull-right"
                >
                    Confirmer
                </button>
            </div>
        </form>
    );
};

export default LoginFormLostPassword;
