import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';

export default function Workstations() {
    return (
        <div id="workstations-page">
            <Header/>
            <div id="workstations-content">

                <div id="workstation-item">
                    <h3>Nome da workstation</h3>
                    <hr></hr>
                    <p>descrição da workstation</p>
                    <button>reservar</button>
                </div>
                

                <div id="workstation-item">
                    <h3>Nome da workstation</h3>
                    <hr></hr>
                    <p>descrição da workstation</p>
                    <button>reservar</button>
                </div>
                
            </div>
        </div>
    )
}