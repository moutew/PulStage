import './index.scss';
import React from 'react';

type Props = {
    onChange?(newValue: string): void,
    value?: string,
    htmlType?: 'text' | 'password',
};

const InputText = (props: Props): JSX.Element => {
    const { onChange, value, htmlType = 'text' } = props;
    return (
        <input
            className="InputText"
            type={htmlType}
            onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => {
                    if (onChange !== undefined) {
                        onChange(e.target.value);
                    }
                }
            }
            value={value}
        />
    );
};

export default InputText;
