import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import {Link} from 'react-router-dom';
import {getUser} from '../../services/auth';

export default function ProfilePage() {
    const email = getUser();
    
    return (
        <div className="page">
            <Header/>

            <div id="profile-content">
                <div id="profile-item">
                    <h3>Nome</h3>
                    <hr></hr>
                    <p></p>
                    <br></br>

                    <h3>E-mail</h3>
                    <hr></hr>
                    <p>{email}</p>
                    <br></br>

                    <h3>CPF</h3>
                    <hr></hr>
                    <p></p>
                    <br></br>

                    <h3>Data de Nascimento</h3>
                    <hr></hr>
                    <p></p>
                    <br></br>

                    <h3>Endereço Pessoal</h3>
                    <hr></hr>
                    <p></p>
                    <br></br>

                    <h3>Biografia</h3>
                    <hr></hr>
                    <p></p>
                    <br></br>

                </div>
                <Link to="/edit">Editar</Link>
                  
            </div>
        </div>
    )
}