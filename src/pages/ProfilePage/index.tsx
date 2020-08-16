import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';

export default function ProfilePage() {
    return (
        <div id="profile-page">
            <Header/>
            <div id="profile-content">
                <div id="profile-item">
                    <h3>Nome</h3>
                    <hr></hr>
                    <p>nome</p>
                    <br></br>

                    <h3>E-mail</h3>
                    <hr></hr>
                    <p>email</p>
                    <br></br>

                    <h3>CPF</h3>
                    <hr></hr>
                    <p>cpf</p>
                    <br></br>

                    <h3>Data de Nascimento</h3>
                    <hr></hr>
                    <p>data</p>
                    <br></br>

                    <h3>Endereço Pessoal</h3>
                    <hr></hr>
                    <p>endereço</p>
                    <br></br>

                    <h3>Biografia</h3>
                    <hr></hr>
                    <p>biografia</p>
                    <br></br>

                </div>
                <button>Editar</button>
                  
            </div>
        </div>
    )
}