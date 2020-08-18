import React,{useState, FormEvent} from 'react';
import './styles.css'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import {login, getToken} from '../../services/auth';

export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory(); 

    async function handleSubmit(e:FormEvent) {
        e.preventDefault();

        const response = await api.post('/auth/authenticate', {
            email, password
        });
        login(response.data.token);
        
        console.log(getToken());

        history.push('/user');
        
    }
    

    return (
        <div id="login-page">
            <div id="login-content">
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)}placeholder="E-mail"/>
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
                   
                    <button type="submit" className="button">login</button>

                </form>
                <p>Ainda não possui uma conta? Cadastre-se</p>
            </div>
        </div>
    )
}