import React from "react";
import Menu from "../components/Menu";
import "../styles/screens/home.css";
import { ReactComponent as EleccionesSvg } from "../img/elecciones2.svg";
import CardEvent from "../components/CardEvent";

const Home = (props) => {
  const { setCategory } = props;
  return (
    <div className="screen-container">
      <Menu target="home" />

      <div className="home-container">
        <div className="content-box">
          <div className="title-box">
            <h1>Bienvenido!!</h1>
            <p>Haz click en "Entrar a votar" para ingresar a una sala...</p>
          </div>
          <CardEvent setCategory={setCategory} />
        </div>

        <div className="screen-box">
          <p className="security-text">
            Nosotros respetamos tu privacidad, sabemos que el voto es secreto,
            por tanto, nuestros algoritmos no revelan ninguna información a
            nadie...
          </p>
          <EleccionesSvg />
        </div>
      </div>
    </div>
  );
};

export default Home;
