import './App.css';
import React, {useState} from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';

const Form = styled.div`
  .btnHide{
    display: none;
  }
`
class App extends React.Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    if(this.state.etapa < 3){
      this.setState({etapa:(++this.state.etapa)});
    } else {
      this.setState({etapa: 4});
      document.getElementById('btn').classList.add('btnHide');
    }
  }
  
  renderizaEtapa(){
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
    }
  } 
  
  render (){
    return (
      <Form className="App">
        {this.renderizaEtapa()}
        <br/>
        <button onClick={this.irParaProximaEtapa} id='btn'>Próxima Etapa</button>
      </Form>
    );
  }
}

export default App;
