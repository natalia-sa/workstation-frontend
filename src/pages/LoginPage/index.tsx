import React from 'react';
import './styles.css'

export default function LoginPage() {
    return (
        <div id="login-page">
            <div id="login-content">
                <form>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>
                    <button>Login</button>
                    
                </form>
                <p>Ainda não possui uma conta? Cadastre-se</p>
            </div>
        </div>
    )
}