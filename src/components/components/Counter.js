import React, { useState, useEffect } from "react";
import { toDate, getDate } from "../scripts/Moment";

//Resta de las fechas
const dateSubstraction = (props) => {
  const { END } = props;
  const START = getDate();

  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

  // Calcs
  const DURATION = END - START;
  const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
  const REMAINING_HOURS = Math.floor(
    (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
  );
  const REMAINING_MINUTES = Math.floor(
    (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
  );
  const REMAINING_SECONDS = Math.floor(
    (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
  );

  const RES = [
    REMAINING_DAYS,
    REMAINING_HOURS,
    REMAINING_MINUTES,
    REMAINING_SECONDS,
  ];

  return RES;
};

//Agregar 0 al inicio
const add0 = (e) => {
  if (e < 10) {
    return `0${e}`;
  } else {
    return e;
  }
};

//Función principal
const Counter = (props) => {
  const { end = getDate(), className = "" } = props;
  const endDate = toDate(end);
  const [date, setDate] = useState(["0", "0", "0", "0"]);

  const counter = () => {
    setDate(dateSubstraction({ END: endDate }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      counter();
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>{`
  ${add0(date[0])}
  :
  ${add0(date[1])}
  :
  ${add0(date[2])}
  :
  ${add0(date[3])}
  `}</span>
  );
};

export default Counter;
