import React from 'react';

class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu email?</p>
                <input></input>
                <p>4. Qual sua escolaridade?</p>
                <select name="select">
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        );
    }
}

export default Etapa1;