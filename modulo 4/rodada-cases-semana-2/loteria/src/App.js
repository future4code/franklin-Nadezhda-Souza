import './App.css';
import styled from 'styled-components'
import { TiArrowSortedDown } from "react-icons/ti";

const AppS = styled.div`
  background-color:  #efefef;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

const HeaderS = styled.div`
  background-color: #6BEFA3;
  width: 100%;
  height: 50%;
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
  return (
    <AppS>
      <HeaderS>
        <div className='select'>
          <select>
            <option value="valor1" selected>Valor 1</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
          <TiArrowSortedDown/>
        </div>
        <img/>
        <p>Concurso n° {4560}</p>
      </HeaderS>
      <DetailsS>
        <div className='bolinhas'>
          <div className='bolinha'>
            <p>06</p>
          </div>
          <div className='bolinha'>
            <p>06</p>
          </div>
          <div className='bolinha'>
            <p>06</p>
          </div>
          <div className='bolinha'>
            <p>06</p>
          </div>
          <div className='bolinha'>
            <p>06</p>
          </div>
          <div className='bolinha'>
            <p>06</p>
          </div>
        </div>
        <p className='text'>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
      </DetailsS>
    </AppS>
  );
}

export default App;
