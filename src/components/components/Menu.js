import React, { useContext, useState } from "react";
import { DataExport } from "../scripts/GlobalContext";
import "../styles/components/menu.css";
import { ReactComponent as LogoSvg } from "../img/logo.svg";
import { Link } from "react-router-dom";
import ConfirmationPopUp from "./ConfirmationPopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVoteYea,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  const { vote } = useContext(DataExport);
  const { target = "home" } = props;
  const [popUp, setPopUp] = useState(false);

  const menuBar = {
    home: (
      <>
        <LogoSvg />
        <p>COSMON</p>
      </>
    ),
    voting: (
      <>
        <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        <p>VOLVER</p>
      </>
    ),
  };

  return (
    <header className="menu-container">
      <Link to="/" className="logo-container">
        {menuBar[target]}
      </Link>

      <nav className="menu-content">
        <label htmlFor="menuBars" id="labelMenuBars">
          <FontAwesomeIcon icon={faBars} className="icon" />
        </label>
        <input type="checkbox" id="menuBars" />

        {target === "voting" ? (
          <div className="btn-vote" onClick={() => setPopUp(true)}>
            <FontAwesomeIcon icon={faVoteYea} className="icon" />
            VOTAR
          </div>
        ) : (
          <p className="user-name">Lorenzo Santiago Saul Arias Villegas</p>
        )}
      </nav>
      {popUp && (
        <ConfirmationPopUp
          msg={`Elejiste ${
            vote ? `"${vote.nombres} ${vote.apellidos}"` : "tu voto en blanco"
          }, presione "Aceptar" para confirmar la selección.`}
          title="Mensaje de confirmacion"
          fnCancel={() => {
            setPopUp(false);
          }}
        />
      )}
    </header>
  );
};

export default Menu;
