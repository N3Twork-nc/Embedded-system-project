import { IPSERVER } from "."
import axios from "axios";

export const getDataGarden = async (idGraden,type,interval,token) => {
 

  const response = await axios.get(IPSERVER+`APIGetDataGarden?idGarden=${idGraden}&type=${type}&interval=${interval}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(response.data)
};

getDataGarden("20231210185549269343","Temperature",1,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDI0ODA3NTAsInVzZXJuYW1lIjoiQmFvbmdhbiJ9.ppfhhPLwi1X97nyxHwH1_iZJ73FzFbN0KaqFALAyXC4")