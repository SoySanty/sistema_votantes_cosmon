import React, { useState, useEffect } from "react";
import { candidateFilter } from "../scripts/Category";
import "../styles/screens/resultscreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const Results = (props) => {
  const { cancel, target = 0 } = props;
  const [candidateList, setCandidateList] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  useEffect(() => {
    if (target) {
      candidateFilter({ target: target, callback: setCandidateList });
    }
  }, [target]);
  useEffect(() => {
    if (candidateList) {
      let votes = 0;
      candidateList.forEach((e) => (votes += parseInt(e.cantidad_votos)));
      setTotalVotes(votes);
    }
  }, [candidateList]);

  return (
    <div
      className="result-screen"
      onTouchStart={(e) =>
        e.target.classList.contains("result-screen") && cancel()
      }
      onMouseDown={(e) =>
        e.target.classList.contains("result-screen") && cancel()
      }
    >
      <div className="result-content">
        <h3>RESULTADOS</h3>
        <p>
          <b>Evento: </b>Elecciones generales 2022
        </p>
        <p>
          <b>Categoría: </b>Presidencia
        </p>
        <table className="result-table">
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Votos</td>
              <td>%</td>
            </tr>
          </thead>
          <tbody>
            {candidateList &&
              candidateList.map((e, index) => (
                <tr key={index}>
                  <td>
                    {e.nombres} {e.apellidos}
                  </td>
                  <td>{e.cantidad_votos}</td>
                  <td>
                    {totalVotes &&
                      ((parseInt(e.cantidad_votos) / totalVotes) * 100).toFixed(
                        2
                      )}
                    %
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="buttons-container">
          <button className="btn-print">
            <FontAwesomeIcon icon={faPrint} className="icon" /> Imprimir
          </button>
          <button onClick={cancel} className="btn-cancel">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
