import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const Tasks = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1rem;
`

export const TasksPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [limitDate, setLimitDate] = useState('');
    const [status, setStatus] = useState('To-do');

    const criarTarefa = (title, description, limitDate) => {
        const body = {
            title: title,
            description: description,
            limitDate: limitDate,
            status: status,
        }

        axios.post("http://localhost:3003/task", body) //404 not found
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    };

    return (
        <div>
            <h1>TasksPage</h1>
            <div>
                <input placeholder="title" onChange={(e) => setTitle(e.target.value)}></input>
                <input placeholder="description" onChange={(e) => setDescription(e.target.value)}></input>
                <input placeholder="limit date" type='date' onChange={(e) => setLimitDate(e.target.value)}></input>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option selected='selected'>To-do</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>
                <button onClick={() => criarTarefa(title, description, limitDate)}>Send Task</button>
            </div>
            <Tasks>
                <div>
                    <h2>To-do</h2>
                    <ul>
                        <li>
                            <h3>item 1</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                        <li>
                            <h3>item 2</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Doing</h2>
                    <ul>
                        <li>
                            <h3>item 1</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                        <li>
                            <h3>item 2</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Done</h2>
                    <ul>
                        <li>
                            <h3>item 1</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                        <li>
                            <h3>item 2</h3>
                            <p>Descrição</p>
                            <p>Data</p>
                        </li>
                    </ul>
                </div>
            </Tasks>
            
        </div>
    )
}