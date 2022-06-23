//barra de navegação da pagina
import styled from 'styled-components';

const Navegation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: orange;
`;

const Navegation__tittle = styled.h1`
    font-size: 2rem;
    color: white;
`;

const Navegation__btn = styled.button`
    height: 2rem;
    width: 7rem;
    margin: 1rem;
    background-color: transparent;
    border-radius: 1rem;
    border-color: white;
    font-weight: bold;
    color: white;
`;

export default function Nav (){
    return(
        <Navegation>
        <Navegation__tittle>LabeX</Navegation__tittle>
        <Navegation__btn>Area do Admin</Navegation__btn> {/* nome do botão muda conforme está logado ou não */}
      </Navegation>
    )
}