import React, { useState, useEffect, useContext } from "react";
import { DataExport } from "../scripts/GlobalContext";
import Menu from "../components/Menu";
import "../styles/screens/votingBooth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { candidateFilter } from "../scripts/Category";
import { MainUrl } from "../scripts/MainUrl";

const Home = (props) => {
  const { categoryInfo } = props;
  const { setVote } = useContext(DataExport);
  const [check, setCheck] = useState(null);
  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    categoryInfo.nro
      ? candidateFilter({
          target: categoryInfo.nro || 0,
          callback: setCandidateList,
        })
      : (window.location.href = "/");

    setVote(null);
  }, [categoryInfo.nro, setVote]);

  return (
    <div className="screen-container">
      <Menu target="voting" />

      <div className="card-container">
        <h1 className="title-voting-booth">Lista de candidatos</h1>
        <p className="subtitle-voting-booth">
          {categoryInfo.evento} - {categoryInfo.categoria}
        </p>
        <div className="card-list">
          {candidateList ? (
            candidateList.map((e, index) => (
              <div
                className="card-item"
                key={index}
                onClick={() => {
                  setCheck(index);
                  setVote(candidateList[index]);
                }}
              >
                <div className="profile-item">
                  <img src={`${MainUrl}${e.foto}`} alt={e.nombres} />
                </div>
                <p className="candidate-name">
                  {e.nombres} {e.apellidos}
                </p>
                <div className="voting-check">
                  {check === index ? (
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
