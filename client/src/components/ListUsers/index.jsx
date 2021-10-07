import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { Container } from './style';
import {useHistory} from 'react-router-dom'
import { useUser } from '../../context/User';

export function ListUsers() {

    const [itens, setItens] = useState([]); // Itens que vem do back-end
    const [itensPerPage, setItensPerPage] = useState(10); // Quantidade de itens por pagina
    const [currentPage, setCurrentPage] = useState(0); // Página atual
    const { user, setUser } = useUser();

    const pages = Math.ceil(itens.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    let currentItens = itens.slice(startIndex, endIndex);
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api.get('http://localhost:3001/users')
                .then(data => data);
            setItens(result.data);
        };
        fetchData();
    }, []);


    function handleDelete(name) {
        const fetchData = async () => {
            await Api.delete('http://localhost:3001/users/' + name);
            const result = await Api.get('http://localhost:3001/users')
                .then(data => data);
            setItens(result.data);
        };
        fetchData();
    }
    return (
        <Container>            
                <strong >Lista de Usuários</strong>            
            {                
                currentItens.length > 0 ?
                    
                    currentItens.map(item => {
                        return <div key={item._id} className="item" >
                            <span>{item.name}</span>
                            <span>{item.cpf}</span>
                            <span>{item.age}</span>
                            <span>{item.email}</span>
                            <span>
                                <button onClick={() => history.push('/edit-users', setUser(
                                    [item._id,item.name,item.cpf,item.age,item.email]
                                ))} value={item._id}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(item.name)} value={item._id} className="delete" >
                                Delete
                            </button></span>
                        </div>;
                    }) : <h3>Nenhum usuário.</h3>               
     
            }
            <div className="index">
                {Array.from(Array(pages), (item, index) => {
                    return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>;
                })}
            </div>
        </Container>
    );
}