import { IPSERVER } from "."
import axios from "axios";

export const getDataGarden = async (idGraden,type,interval,token) => {
  const response = await axios.get(IPSERVER+`APIGetDataGarden?idGarden=${idGraden}&type=${type}&interval=${interval}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  JSON.parse(response.data)
  keys=[]
  values=[]
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      keys.push(key)
      var value = data[key];
      values.push(value);
    }
  }
  return {keys,values}
};
