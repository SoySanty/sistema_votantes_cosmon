import { MainUrl } from "./MainUrl";

const candidateFilter = async (props) => {
  const { target, callback } = props;
  const body = new FormData();
  body.append("nro", target);
  const data = { method: "POST", body };
  const url = `${MainUrl}?show=votante&target=filtrar_candidatos`;
  const request = await fetch(url, data);
  const response = await request.json();
  callback(response ? response : []);
};

export { candidateFilter };
