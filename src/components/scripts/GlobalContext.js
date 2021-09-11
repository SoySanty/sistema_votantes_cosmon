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

  //Lista de datos a exportar
  const dataExport = {
    eventList,
    refershEventList,
  };

  return (
    <DataExport.Provider value={dataExport}>{children}</DataExport.Provider>
  );
};
