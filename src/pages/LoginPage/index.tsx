import React,{useState, FormEvent} from 'react';
import './styles.css'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import {login} from '../../services/auth';
import users from '../../assets/icons/users-cog-solid.svg';
import {Link} from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); 

    async function handleSubmit(e:FormEvent) {
        e.preventDefault();

        const responseAuth = await api.post('/auth/authenticate', {
            email, password
        });

        const ResponseUser = await api.get(`/user/${email}`)
        
        login(responseAuth.data.token,ResponseUser.data.email);

        history.push('/user');
        
    }
    

    return (
        <div className="blue-page">
            <div id="login-content">
                <div id="icon">
                    <h2>CoWorking</h2>
                    <img src={users} alt="icon"></img>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)}placeholder="E-mail"/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
                   
                    <button type="submit" className="button-blue">login</button>

                </form>
                <p>Ainda não possui uma conta? <Link to="/register"> Cadastre-se</Link></p>
            </div>
        </div>
    )
}