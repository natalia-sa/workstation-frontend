import React, {useState, FormEvent}from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
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
        <div id="register-page">
            <div id="register-content">
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={ e => setEmail(e.target.value)} placeholder="E-mail"/>
                    <input value={password} onChange={ e => setPassword(e.target.value)} placeholder="Senha"/>
                    <input placeholder="Confirme sua senha"/>
                    <button className="button2" type="submit">
                        Cadastrar
                    </button>
                    <p>um e-mail de confirmação será enviado para o endereço cadastrado</p>
                    
                    
                </form>
            </div>
        </div>
    )
}