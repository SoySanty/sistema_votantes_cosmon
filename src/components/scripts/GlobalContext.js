import React, { createContext, useEffect, useState } from "react";
import { getEventList } from "./Events";

export const DataExport = createContext();

export const GlobalContext = ({ children }) => {
  //==========Manejador de eventos
  const [eventList, setEventList] = useState([]); //Lista de eventos
  const refershEventList = () => {
    //Refrescar eventos
    getEventList(setEventList);
  };
  useEffect(() => {
    refershEventList();
  }, []);

  //==========Manejador de candidatos
  const [vote, setVote] = useState(null);

  //Lista de datos a exportar
  const dataExport = {
    eventList,
    refershEventList,
    vote,
    setVote,
  };

  return (
    <DataExport.Provider value={dataExport}>{children}</DataExport.Provider>
  );
};
