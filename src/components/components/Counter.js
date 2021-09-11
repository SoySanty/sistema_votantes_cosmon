import React from "react";
import { toDate, getDate } from "../scripts/Moment";

const dateToArray = (e) => {
  let arrayDate = [];
  arrayDate.push(parseInt(e.getDate()));
  arrayDate.push(parseInt(e.getMonth() + 1));
  arrayDate.push(parseInt(e.getFullYear()));
  arrayDate.push(parseInt(e.getHours()));
  arrayDate.push(parseInt(e.getMinutes()));
  arrayDate.push(parseInt(e.getSeconds()));

  // [DD, MM, YYYY, hh, mm, ss]
  return arrayDate;
};

const Counter = (props) => {
  const { end = getDate(), className = "" } = props;
  const startDate = dateToArray(getDate());
  const endDate = dateToArray(toDate(end));

  console.log([...startDate, ...endDate]);

  return <span className={className}>Hola</span>;
};

export default Counter;
