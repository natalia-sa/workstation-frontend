import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import desktop from '../../assets/icons/desktop-solid.svg';
import users from '../../assets/icons/users-solid.svg';
import {Link} from 'react-router-dom';

export default function UserPage() {
    return (
        <div className="page">
            <Header/>
            <div id="user-content">
                <div className="card">
                    <h2><Link to="/workstations">Workstations</Link></h2>
                    <p>Acesse worksations cadastradas e faça uma reserva</p>
                    <div className="img">
                        <img src={desktop} alt="icon"></img>
                    </div>
                    
                </div>

                <div className="card">
                    <h2><Link to="/meetings">Meeting Rooms</Link></h2>
                    <p>Marque uma nova reunião em alguma das salas disponíveis</p>
                    <div className="img">
                        <img src={users} alt="icon"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}