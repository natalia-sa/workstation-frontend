import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

export default function LoginPage() {
    return (
        <div id="login-page">
            <div id="login-content">
                <form>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>
                    <div className="button">
                        <Link to ="/user">Login</Link>
                    </div>
                        
    
                </form>
                <p>Ainda não possui uma conta? Cadastre-se</p>
            </div>
        </div>
    )
}