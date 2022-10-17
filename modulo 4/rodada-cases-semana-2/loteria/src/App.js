import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppS = styled.div`
  background-color: ${props => props.color || '#6BEFA3'};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: 800px) {
   display: flex;
   flex-direction: row; 
   overflow-y: hidden;
  }
`

const HeaderS = styled.div`
  background-color: ${props => props.color || '#6BEFA3'};
  width: 100%;
  min-height: 50%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .logo{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-image{
    display: flex;
    justify-content: center;
  }

  #logo1{
    width: 60px;
    position: relative;
    left: 30px;
    margin: 8px 0;
  }

  #logo2{
    width: 60px;
    position: relative;
    right: 30px;
    margin: 8px 0;
  }

  .title{
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;
    margin: 8px 0;
  }

  .concurso{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  @media (min-width: 800px) {
    padding: 5% 1rem;
  }
`

const DetailsS = styled.div`
  border-radius: 50% 50% 0 0;
  background-color:  #efefef;
  width: 200%;
  position: relative;
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 30px 0;
  box-sizing: border-box;
  min-height: 50%;
  justify-content: space-between;

  .bolinhas{
    max-width: 100vw;
    margin: 16px auto;
    padding: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
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
    margin: 8px auto;
    padding: 4px;
    box-sizing: border-box;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    position: relative;
    bottom: 0;
  }

  @media (min-width: 800px) {
    right: 0;
    height: 200%;
    align-self: center;
    border-radius: 50% 0 0 50%;
    padding: 50% 70px;
    justify-content: center;

    .text{
      position: absolute;
      bottom: 30%;
    }
  }
`

function App() {
  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [details, setDetails] = useState({id: 2359, numeros:[]}); //corrigir
  const [title, setTitle] = useState('MEGA-SENA');
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
    loterias.map((loteria) => {
      if(loteria.id == option){
        setTitle(loteria.nome.toUpperCase());
      }
    })
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
    <AppS color={color}>
      <HeaderS color={color}>
          <DropdownButton title={title} variant='light'>
            {loterias?.map((loteria) => {
                return(
                    <Dropdown.Item eventKey={loteria.id} value={loteria.id} as="button" onClick={(e) => handleSelect(e.target.value)}>{loteria.nome.toUpperCase()}</Dropdown.Item>
                )
              })}
          </DropdownButton>
        <div className='logo'>
          <div className='logo-image'>
            <img id='logo1' src={require('./images/logo1.png')}/>
            <img id='logo2' src={require('./images/logo2.png')}/>
          </div>
          <p className='title'>{title}</p>
        </div>
        <p className='concurso'>Concurso n° {details.id}</p>
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
