import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataExport } from "../scripts/GlobalContext";
import { sortDates } from "../scripts/Moment";
import Counter from "./Counter";
import "../styles/components/cardEvent.css";
import Results from "../screens/Results";

const CardEvent = (props) => {
  const { setCategory } = props;
  const { eventList } = useContext(DataExport);
  const [eventProcessed, setEventProcessed] = useState([]);
  const [resultScreen, setResultScreen] = useState({});

  useEffect(() => {
    setResultScreen(null);
  }, []);
  useEffect(() => {
    eventList && setEventProcessed(sortDates(eventList));
  }, [eventList]);

  return (
    <div className="card-event">
      {eventProcessed.present ? (
        eventProcessed.present.map((e, index) => (
          <div className="card-item" key={index}>
            <div className="info-item">
              <p className="info-title">{e.evento}</p>
              <p>
                Categoría: <span className="info-subtitle">{e.categoria}</span>
              </p>
              <Link
                to={`/votar`}
                onClick={() => {
                  setCategory(e);
                }}
              >
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
              <button
                className="info-button res-btn"
                onClick={() => setResultScreen(e)}
              >
                Ver resultados
              </button>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
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
      {resultScreen && (
        <Results
          cancel={() => setResultScreen(null)}
          target={resultScreen.nro}
        />
      )}
    </div>
  );
};

export default CardEvent;
