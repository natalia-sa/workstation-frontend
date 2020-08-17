import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div id="header-content">
                    <div>CoWorking</div>
                    <div>
                        <Link to="/workstations">Workstations</Link>
                        <Link to="/meetings">Meeting rooms</Link>
                        <Link to="/profile">Perfil</Link>
                    </div>
                </div>
        </header>
    )
}