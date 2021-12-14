import './index.scss';
import React from 'react';

type Props = {
    disabled: boolean,
    text: string,
};

const InputSubmit = (props: Props): JSX.Element => {
    const { disabled, text } = props;

    return (
        <button
            className={`InputSubmit ${disabled ? 'InputSubmit-disabled' : ''}`}
            type="submit"
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default InputSubmit;
