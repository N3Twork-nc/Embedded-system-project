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

export const myGarden = async (gardenName, location, cropType, token) => {
  try {
    const data = {
        "name_garden": `${gardenName}`,
        "location": `${location}`,
        "cropType": `${cropType}`
    };

    const response = await axios.put(IPSERVER + 'APIUploadMyGarden', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status == 200) {
      return "Successful";
    } else {
      return "Failure";
    }

  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDetailGardens = async (token) => {
  try {
    const response = await axios.get(IPSERVER + "APIGetDetailGarden",
    {headers: {
      Authorization:`Bearer ${token}`}
    });
    
    const detail = response.data;
    
    const saving = [];
    
    Object.entries(detail).forEach(([gardenId, gardenInfo]) => {
      const croptype = gardenInfo.CropType;
      const gardenname = gardenInfo.NameGarden;
      const location = gardenInfo.location;
      const time = gardenInfo.timeUpload;
    
      saving.push({ gardenId, croptype, gardenname, location, time });
    });

    console.log("Get detail gardens success");
    return saving;
  } catch (error) {
    console.log(error);
    return error;
  }
};