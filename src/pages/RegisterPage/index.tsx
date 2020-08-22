import React, {useState, FormEvent}from 'react';
import './styles.css'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function RegisterPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory(); 

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        
        api.post('/signup', {
            email, password
        }).then(()=> {alert('cadastro realizado com sucesso')})

        history.push('/login');
    }


    return (
        <div className="blue-page">
            <div id="register-content">
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={ e => setEmail(e.target.value)} placeholder="E-mail"/>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value)} placeholder="Senha"/>
                    <input type="password" placeholder="Confirme sua senha"/>
                    <button className="button-blue" type="submit">
                        Cadastrar
                    </button>
                    <p>um e-mail de confirmação será enviado para o endereço cadastrado</p>
                    
                    
                </form>
            </div>
        </div>
    )
}