import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([
    {
    id: Date.now(), 
    texto: 'Texto da tarefa',
    completa: false,
  }]);
  
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");
  
 /*  useEffect(() => {  
    const storedTarefa = localStorage.getItem(tarefas);
    setTarefa(storedTarefa);
  },[]);

  useEffect(() => {
  },[]); */

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  }

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),//retorna um id unico
      texto: inputValue,       //não sei se está correto
      completa: false ,
    }
    const copiaDoEstado = [...tarefas];
    copiaDoEstado.push(novaTarefa);
    setTarefa(copiaDoEstado);     //não sei se está correta
  }

  const selectTarefa = (id) => {
    const novaListaDeTarefas = tarefas.map(
      (task) => {
        if(id == task.id){
          const novaTarefa = {
            ... task,    //conferir
            completa: !task.completa,
          }
          return novaTarefa;
        } else{
          return task;
        }
      }
    )
    setTarefa(novaListaDeTarefas);
  }

  const onChangeFilter = (event) => {
    if(event.target.value == 'pendentes'){
      setFiltro('pendentes');
    } else if (event.target.value == 'completas'){
      setFiltro('completas');
    } else {
      setFiltro('');
    }
  }

 
  const listaFiltrada = tarefas.filter( (tarefa) => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  }); 
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }


export default App
