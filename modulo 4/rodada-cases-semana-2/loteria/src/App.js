import './App.css';
import styled from 'styled-components'
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from 'react';
import axios from 'axios';

const AppS = styled.div`
  background-color:  #efefef;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

const HeaderS = styled.div`
  background-color: ${props => props.color || '#6BEFA3'};
  width: 100%;
  min-height: 50%;
  text-align: center;
  padding: 2rem 1rem;
  box-sizing: border-box;

  .select{
    background: yellow;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .select select {
    background-color: transparent;
    border-style: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
  }

  .logo{
    display: flex;
    justify-content: center;
  }

  #logo1{
    width: 60px;
  }

  #logo2{
    width: 60px;
    position: relative;
    right: 60px;
  }
`

const DetailsS = styled.div`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color:  #efefef;
  width: 200%;
  position: relative;
  bottom: 70px;
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  box-sizing: border-box;

  .bolinhas{
    max-width: 100vw;
    margin: 0 auto;
    padding: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
  }

  .bolinha{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
    background-color: white;
    width: 70px;
    height: 70px;
    margin: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
      margin:0;
    }
  }

  .text{
      max-width: 100vw;
      margin: auto;
      padding: 4px;
      box-sizing: border-box;
      text-align: center;
      margin: 0;
    }
`

function App() {
  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [details, setDetails] = useState({id: 2359}); //corrigir
  const [selectValue, setSelectValue] = useState();
  const [color, setColor] = useState();


  const getLoterias = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')
    .then((response) => {
      setLoterias(response.data);
    })
  }

  const getConcursos = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')
    .then((response) => {
      setConcursos(response.data);
    })
  }

  const getConcursosDetails = (id = concursos[0].concursoId) => {
    axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
    .then((response) => {
      setDetails(response.data);
    })
  }

  const handleSelect = (option) => {
    setSelectValue(option);
    concursos.map((concurso) => {
      if(concurso.loteriaId == option){
        getConcursosDetails(concurso.concursoId);
      }
    })
    switch (option) {
      case '0':
        setColor('#6BEFA3');
        break;
      case '1':
        setColor('#8666EF');
        break;
      case '2':
        setColor('#DD7AC6');
        break;
      case '3':
        setColor('#FFAB64');
        break;
      case '4':
        setColor('#5AAD7D');
        break;
      case '5':
        setColor('#BFAF83');
        break;
    }
  }

  useState(() => {
    getLoterias();
    getConcursos();
  }, []);

  return (
    <AppS>
      <HeaderS color={color}>
        <div className='select'>
          <select defaultValue={selectValue} value={selectValue} onChange={(e) => handleSelect(e.target.value)}>
            {loterias?.map((loteria) => {
              return(
                <option key={loteria.id} value={loteria.id}>{loteria.nome}</option>
              )
            })}
          </select>
          <TiArrowSortedDown/>
        </div>
        <div className='logo'>
          <img id='logo1' src={require('./images/logo1.png')}/>
          <img id='logo2' src={require('./images/logo2.png')}/>
        </div>
        
        <p>Concurso n° {details.id}</p>
      </HeaderS>
      <DetailsS>
        <div className='bolinhas'>
          {details.numeros.map((numero) => {
            return (
              <div className='bolinha'>
                <p>{numero}</p>
              </div>
            )
          })}
        </div>
        <p className='text'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
      </DetailsS>
    </AppS>
  );
}

export default App;
