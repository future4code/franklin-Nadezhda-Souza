import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";

const AppS = styled.div`
  background-color: ${(props) => props.color || "#6BEFA3"};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
  }
`;

const HeaderS = styled.div`
  background-color: ${(props) => props.color || "#6BEFA3"};
  width: 100%;
  min-height: 50%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-image {
    display: flex;
    justify-content: center;
  }

  #logo1 {
    width: 60px;
    position: relative;
    left: 30px;
    margin: 8px 0;
  }

  #logo2 {
    width: 60px;
    position: relative;
    right: 30px;
    margin: 8px 0;
  }

  .title {
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    color: #ffffff;
    margin: 8px 0;
  }

  .concurso {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  @media (min-width: 800px) {
    padding: 5% 1rem;

    .logo {
      flex-direction: row;
    }

    .title {
      margin-right: 30px;
    }
  }
`;

const DetailsS = styled.div`
  border-radius: 50% 50% 0 0;
  background-color: #efefef;
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

  .bolinhas {
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

  .bolinha {
    font-family: "Montserrat";
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

    p {
      margin: 0;
    }
  }

  .text {
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
    padding: 50% 80px;
    justify-content: center;

    .text {
      position: absolute;
      bottom: 30%;
      max-width: 80%;
    }
  }

  @media (max-width: 1000px) {
    .bolinhas {
      min-height: 300px;
      overflow-y: auto;
    }
  }
`;

function App() {
  const [loterias, setLoterias] = useState([]);
 /*  const [concursos, setConcursos] = useState([]); */
  const [details, setDetails] = useState({dezenas: []}); //corrigir
  const [title, setTitle] = useState("MEGA-SENA");
  const [color, setColor] = useState();

  /* 
  A api sugerida pelo case não está funcionando. Por este motivo estou utilizando outra api semelhante.

  const getLoterias = () => {
    axios
      .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
      .then((response) => {
        setLoterias(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  const getConcursos = () => {
    axios
      .get(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
      )
      .then((response) => {
        setConcursos(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  const getConcursosDetails = (id = concursos[0].concursoId) => {
    axios
      .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
      .then((response) => {
        setDetails(response.data);
      }).catch(error => {
        console.log(error);
      });
  }; */

  const getLoterias = () => {
    axios
      .get("https://loteriascaixa-api.herokuapp.com/api")
      .then((response) => {
        setLoterias(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  const getDetails = (id) => {
    axios
      .get(`https://loteriascaixa-api.herokuapp.com/api/${id}/latest`)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  const handleSelect = (option) => {
    loterias.map((loteria) => {
      if (loteria == option) {
        setTitle(loteria.toUpperCase());
        getDetails(option);
      }
    });

    switch (option) {
      case "mega-sena":
        setColor("#6BEFA3");
        break;
      case "quina":
        setColor("#8666EF");
        break;
      case "lotofacil":
        setColor("#DD7AC6");
        break;
      case "lotomania":
        setColor("#FFAB64");
        break;
      case "timemania":
        setColor("#5AAD7D");
        break;
      case "dia-de-sorte":
        setColor("#BFAF83");
        break;
      case "dupla-sena":
        setColor("#79ABC9");
        break;
      case "super-sete":
        setColor("#B270DB");
        break;
      case "loteria-federal":
        setColor("#EE9395");
        break;
    }
  };

  useState(() => {
    getLoterias();
    /* getConcursos(); */
    getDetails('mega-sena');
  }, []);

  return (
    <AppS color={color}>
      <HeaderS color={color}>
        <DropdownButton title={title} variant="light">
          {loterias?.map((loteria) => {
            return (
              <Dropdown.Item
                eventKey={loteria}
                value={loteria}
                as="button"
                onClick={(e) => handleSelect(e.target.value)}
              >
                {loteria.toUpperCase()}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <div className="logo">
          <div className="logo-image">
            <img id="logo1" src={require("./images/logo1.png")} />
            <img id="logo2" src={require("./images/logo2.png")} />
          </div>
          <p className="title">{title}</p>
        </div>
        <p className="concurso">Concurso n° {details.concurso}</p>
      </HeaderS>
      <DetailsS>
        <div className="bolinhas">
          {details.dezenas.map((numero) => {
            return (
              <div className="bolinha">
                <p>{numero}</p>
              </div>
            );
          })}
        </div>
        <p className="text">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </DetailsS>
    </AppS>
  );
}

export default App;