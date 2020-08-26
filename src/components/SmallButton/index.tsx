import React, { ButtonHTMLAttributes} from 'react';
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}

const SmallButton: React.FC<ButtonProps> = ({text}) => {
    return (
        <button id="create" type="submit">{text}</button>
    );
}

export default SmallButton;