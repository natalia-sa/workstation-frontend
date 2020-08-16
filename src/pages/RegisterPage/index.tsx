import React from 'react';
import './styles.css'

export default function RegisterPage() {
    return (
        <div id="login-page">
            <div id="login-content">
                <form>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>
                    <input placeholder="Confirme sua senha"/>
                    <button>Cadastrar</button>
                    
                </form>
            </div>
        </div>
    )
}