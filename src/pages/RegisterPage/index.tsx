import React, {useState, FormEvent}from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import api from '../../services/api';

export default function RegisterPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        
        api.post('/signup', {
            email, password
        })
    }


    return (
        <div id="login-page">
            <div id="login-content">
                <form>
                    <input value={email} onChange={ e => setEmail(e.target.value)} placeholder="E-mail"/>
                    <input value={password} onChange={ e => setPassword(e.target.value)} placeholder="Senha"/>
                    <input placeholder="Confirme sua senha"/>
                    <div className="button">
                        <Link to="/">Cadastrar</Link>
                    </div>
                    <p>um e-mail de confirmação será enviado para o endereço cadastrado</p>
                    
                </form>
            </div>
        </div>
    )
}