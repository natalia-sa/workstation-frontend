import React, {useState,FormEvent} from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import api from '../../services/api';
import {getToken} from '../../services/auth';

interface Item {
    weekDay: number,
    from:number,
    to: number,
    _id: string,
    roomId: string,
    type: string
}

export default function Reserve() {
    const [schedule, setSchedule] = useState<Item[]>([]);
    const [weekDay, setDay] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [roomId, setRoom] = useState();

    

    async function addItems(e: FormEvent) {
        e.preventDefault();
        
        const token1 = getToken();
        const authorization = "bearer " + token1;

        api.post('/schedule',{weekDay, from, to, roomId, type:"workstation"})

    }
    async function deleteItem(id: string) {
        const token1 = getToken();
        const authorization = "bearer " + token1;
        
        api.delete(`/schedule/${id}`,{headers: {authorization}} )

        

    }

    return (
        <div className="page">
        <Header/>
            <div id="content-reserve">
                <div id="create-schedule">
                    <h2>Efetuar nova reserva</h2>
                    <form onSubmit={addItems}>
                        
                        <label>Dia da semana:</label>
                        <input value={weekDay} onChange={e => setDay(e.target.value)}></input>

                        <label>De:</label>
                        <input value={from} onChange={e => setFrom(e.target.value)} type="time"></input>

                        <label>Até:</label>
                        <input value={to} onChange={e => setTo(e.target.value)}type="time"></input>
                        
                        <button type="submit">reservar</button>
                    </form>
                    
                </div>
                <h2>Reservas</h2>
                {
                    schedule.map(item => {
                        
                        return (
                            <div key={item._id} id="schedule-item">
                                <h3>Dia da semana:{item.weekDay}</h3>
                                <h3>De:{item.from}</h3>
                                <h3>até:{item.to}</h3>
                                <button onClick={(()=> {deleteItem(item._id)})}>deletar</button>
                            </div>
                        )
                    })
                }
                
            
            </div>
        </div>
      
        
    )
}

