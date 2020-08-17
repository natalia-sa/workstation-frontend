import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';

export default function EditProfile() {
    return (
        <div id="profile-page">
            <Header/>
            <div id="profile-content">
                <div id="profile-item">
                    <h3>Nome</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                    <h3>E-mail</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                    <h3>CPF</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                    <h3>Data de Nascimento</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                    <h3>Endereço Pessoal</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                    <h3>Biografia</h3>
                    <hr></hr>
                    <input></input>
                    <br></br>

                </div>
                <button>Salvar</button>
                  
            </div>
        </div>
    )
}