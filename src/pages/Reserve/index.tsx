import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';

export default function Reserve() {
    return (
        <div id="reserve-page">
        <Header/>
            <div id="content-reserve">
                <div id="create-schedule">
                    <h2>Efetuar nova reserva</h2>
                    <form>
                        
                        <label>Dia da semana:</label>
                        <input></input>

                        <label>De:</label>
                        <input type="time"></input>

                        <label>Até:</label>
                        <input type="time"></input>
                        <div className="button2"></div>
                        <button>reservar</button>
                    </form>
                    
                </div>
                <h2>Reservas</h2>
                <div id="schedule-item">
                    <h3>Dia da semana:</h3>
                    <h3>De:</h3>
                    <h3>até:</h3>
                </div>
            
            </div>
        </div>
      
        
    )
}

