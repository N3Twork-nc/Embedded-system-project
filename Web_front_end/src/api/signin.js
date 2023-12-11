import { IPSERVER } from "."
import axios from "axios";

export const signin = async (username, password) => {
  try {
    const response = await axios.post(IPSERVER+'APIsignin', {
      username: username,
      password: password
    });
    const info=response.data['info'];
    const token = response.data['token'];
    const status = response.status;
    return {status,token,info};
  } catch (error) {
    const status=error.response.status
    console.log(status)
    return {status,token:"null",info:'null'};
  }
};