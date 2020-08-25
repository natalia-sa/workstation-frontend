import React, { ButtonHTMLAttributes} from 'react';
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    
}

const CreateButton: React.FC<ButtonProps> = () => {
    return (
        <button type="submit">Criar</button>
    );
}

export default CreateButton;