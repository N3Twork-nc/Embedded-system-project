import { IPSERVER } from "."
import axios from "axios";

export const signin = async (username, password) => {
  try {
    const response = await axios.post(IPSERVER+'APIsignin', {
      username: username,
      password: password
    });

    return response.data;
  } catch (error) {
    // Xử lý lỗi ở đây nếu cần
    console.error('Error while signing in:', error);
  }
};