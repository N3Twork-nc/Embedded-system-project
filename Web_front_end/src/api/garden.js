import { IPSERVER } from "."
import axios from "axios";

export const getDataGarden = async (idGraden,type,interval,token) => {
  const response = await axios.get(IPSERVER+`APIGetDataGarden?idGarden=${idGraden}&type=${type}&interval=${interval}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data=response.data["Data"]
  var keys=[]
  var values=[]
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      keys.push(key)
      var value = data[key];
      values.push(value);
    }
  }
  return {keys,values}
};

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

export const deleteGarden= async (id_garden,token) =>{
  try {
    const response = await axios.delete(IPSERVER +`APIDeleteGarden?id_garden=${id_garden}`,
    {headers: {
      Authorization:`Bearer ${token}`}
    });
    
    const result = response.data;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}