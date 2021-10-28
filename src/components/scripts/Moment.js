//==========Manejadores de tiempo
const getDate = () => {
  //Obtener fecha
  let date = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  date = new Date(date);
  return date;
};

const toDate = (e) => {
  //De string a date
  let date = new Date(e);
  return date;
};

//Ordenar los eventos
const sortDates = (e) => {
  const TODAY = getDate();
  const RES = { future: [], present: [], past: [] };
  if (e) {
    for (let i of e) {
      if (TODAY > toDate(i.inicio) && TODAY < toDate(i.inicio_elecciones)) {
        RES.future.push(i);
      } else if (
        TODAY > toDate(i.inicio_elecciones) &&
        TODAY < toDate(i.final_elecciones)
      ) {
        RES.present.push(i);
      } else {
        RES.past.push(i);
      }
    }
  }

  return RES;
};

export { getDate, toDate, sortDates };
