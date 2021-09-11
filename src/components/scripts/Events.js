import { MainUrl } from "./MainUrl";

//Obtener la lista de eventos
const getEventList = async (callback) => {
  const request = await fetch(`${MainUrl}?show=votante&target=lista_eventos`);
  const response = await request.json();
  callback(response);
};

export { getEventList };
