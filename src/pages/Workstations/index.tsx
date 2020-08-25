import React, {useState, FormEvent, useEffect} from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import {getToken} from '../../services/auth';
import CreateButton from '../../components/CreateButton/index';


interface Item {
    name: string,
    description: string,
    _id: string
}

export default function Workstations() {
    const [items,setItems] = useState<Item[]>([]);
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    useEffect( () => {
        async function loadWorkstations(){
            const token1 = getToken();
            const authorization = "bearer " + token1;
            const response = await api.get('/workstation',{headers: {authorization}} );
            setItems(response.data);
            
            
        }

        loadWorkstations();
    }, []);

    async function addItems(e: FormEvent) {
        e.preventDefault();
        
        const token1 = getToken();
        const authorization = "bearer " + token1;

        api.post('/workstation',{name, description})

        const response = await api.get('/workstation',{headers: {authorization}} );
        
        setItems(response.data);
    }

    async function deleteItem(id: string) {
        const token1 = getToken();
        const authorization = "bearer " + token1;
        
        api.delete(`/workstation/${id}`,{headers: {authorization}} )

        const response = await api.get('/workstation',{headers: {authorization}} );
        
        setItems(response.data);

    }

    
    return (
        <div className="page">
            <Header/>
            <div id="workstations-content">
                <h2>Criar nova Workstation</h2>
                <form onSubmit={addItems}>
                        
                    <label>Nome da workstation:</label>
                    <input value={name} onChange={e => setName(e.target.value)}></input>

                    <label>Descrição</label>
                    <input value={description} onChange={e => setDescription(e.target.value)}></input>

                    
                    <CreateButton></CreateButton>
                </form>

                {
                    items.map(item => {
                        
                        return (
                            <div key={item._id} id="workstation-item">
                                <h3>{item.name}</h3>
                                <hr></hr>
                                <p>{item.description}</p>
                                <div className="button3">
                                    <Link to="/reserve">Reservar</Link>
                                </div>
                                
                                <button onClick={(()=> {deleteItem(item._id)})}>deletar</button>
                    
                            </div>
                        )
                    })
                }

                
                
            </div>
        </div>
    )
}