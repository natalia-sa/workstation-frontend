import React,{useState} from 'react';
import Header from '../../components/Header/index';
import {Link} from 'react-router-dom';

interface Item {
    name: string,
    description: string
}


export default function MeetingPage() {
    const [items, setItems] = useState<Item[]>([])

    function addItems(name:string, description: string) {
        const newArray: Item[] = [...items, {name: name, description: description}]
        setItems(newArray);
    }
    return (
        <div id="workstations-page">
            <Header/>
            <div id="workstations-content">

                {
                    items.map(item => {
                        console.log(item.name)
                        return (
                            <div id="workstation-item">
                                <h3>{item.name}</h3>
                                <hr></hr>
                                <p>{item.description}</p>
                                <div className="button2">
                                    <Link to="/reserve">Reservar</Link>
                                </div>
                    
                            </div>
                        )
                    })
                }
                <button onClick={() => {addItems("nome", "ola")}}>Nova Meeting Room</button>
                
            </div>
        </div>
    )
}