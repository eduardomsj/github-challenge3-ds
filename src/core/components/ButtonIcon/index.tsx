import React from 'react';
import './styles.scss';

type Props = {
    text: string;    
}

const ButtonIcon = ({ text }: Props) => (
    <button className="button-icon">
        {text}
    </button>
);

export default ButtonIcon;
