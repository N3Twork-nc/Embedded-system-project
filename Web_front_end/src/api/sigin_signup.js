import axios from "axios";
import { IPServer } from ".";

export const signin = async (username, password) => {
  try {
    const data = {
      username: username,
      password: password
    };
    const response = await axios.post(IPServer+'APIsignin', data)
    const info=response.data['info'];
    const token = response.data['token'];
    const status = response.status;
    console.log(status)
    return {status,token,info};
  }
  catch (error){
    const status=error.response.status
    console.log(status)
    return {status,token:"null",info:'null'};
  }
};

export const signup = async (fullname, username, password, email) => {
  try {
    const data = {
      "fullname": `${fullname}`,
      "username": `${username}`,
      "password": `${password}`,
      "email": `${email}`
    };
    const response= await axios.put(IPServer+'APIsignup', data)
    console.log(response.data)
    return response.data
  }
  catch (error){
    console.log(error)
    return error
  }
};

export const verify = async (fullname, username, password, email, otp) => {
  try {
    const data = {
      "fullname": `${fullname}`,
      "username": `${username}`,
      "password": `${password}`,
      "email": `${email}`,
      "OTP": `${otp}`
    };
  // console.log(fullname, username, password, email, otp );
    const response= await axios.post(IPServer+'APIsignup', data)
    console.log(response.data)
    return response.data
  }
  catch (error){
    console.log(error)
    return error
  }
};