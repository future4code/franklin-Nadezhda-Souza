import './App.css';
import { TelaCadastro } from './components/cadastro';
import { TelaLista } from './components/lista';
import React, {useState} from 'react';

function App() {
  const [tela, setTela] = useState(true);

  const TrocaTela = () => {
    setTela(!tela);
  }

  const RenderizaTela = () => {
    if (tela){
      return TelaCadastro()
    } else {
      return TelaLista()
    }
  }

  return (
    <div className="App">
      <button onClick={TrocaTela}>Trocar de Tela</button>
      {RenderizaTela()}
    </div>
  );
}

export default App;
