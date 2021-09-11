import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataExport } from "../scripts/GlobalContext";
import { sortDates } from "../scripts/Moment";
import Counter from "./Counter";
import "../styles/components/cardEvent.css";

const CardEvent = () => {
  const { eventList } = useContext(DataExport);
  const [eventProcessed, setEventProcessed] = useState([]);

  useEffect(() => {
    eventList && setEventProcessed(sortDates(eventList));
  }, [eventList]);

  return (
    <div className="card-event">
      {eventProcessed.future ? (
        eventProcessed.future.map((e, index) => (
          <div className="card-item" key={index}>
            <div className="info-item">
              <p className="info-title">{e.evento}</p>
              <p>
                Categoría: <span className="info-subtitle">{e.categoria}</span>
              </p>
              <p>
                Disponible en: <br />
                <Counter end={e.inicio_elecciones} className="info-subtitle" />
              </p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {eventProcessed.present ? (
        eventProcessed.present.map((e, index) => (
          <div className="card-item" key={index}>
            <div className="info-item">
              <p className="info-title">{e.evento}</p>
              <p>
                Categoría: <span className="info-subtitle">{e.categoria}</span>
              </p>
              <Link to="/votar">
                <button className="info-button">Entrar a la votar</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {eventProcessed.past ? (
        eventProcessed.past.map((e, index) => (
          <div className="card-item" key={index}>
            <div className="info-item">
              <p className="info-title">{e.evento}</p>
              <p>
                Categoría: <span className="info-subtitle">{e.categoria}</span>
              </p>
              <Link to="/votar">
                <button className="info-button res-btn">Ver resultados</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}

      {/* <div className="card-item">
            <div className="info-item">
               <p className="info-title">Elecciones generales 2021</p>
               <p>Categoría:<span className="info-subtitle"> Presindencia</span></p>
               <Link to="/votar">
                  <button className="info-button">Entrar a la votar</button>
               </Link>
            </div>
         </div>

         <div className="card-item">
            <div className="info-item">
               <p className="info-title">Elecciones generales 2021</p>
               <p>Categoría:<span className="info-subtitle"> Presindencia</span></p>
               <Link to="/votar">
                  <button className="info-button res-btn">Ver resultados</button>
               </Link>
            </div>
         </div>

         <div className="card-item">
            <div className="info-item">
               <p className="info-title">Elecciones generales 2021</p>
               <p>Categoría:<span className="info-subtitle"> Secretaría</span></p>
               <p>Disponible en: <br /><span className="info-subtitle">00:13:24:12</span></p>
            </div>
         </div> */}
    </div>
  );
};

export default CardEvent;
